import React, { useState, useEffect } from "react";
import "./AddEvents.css";
import Navbar from "../../components/navbar/Navbar";
import UploadPhotos from "../../components/uploadPhotos/UploadPhotos";
import CardEvent from "../../components/cardEvent/CardEvent";
import Button from "../../components/button/Button";
import { EventService } from "../../Service/EventService";
import EventModal from "../../components/eventModal/EventModal";
import SectionName from "../../components/sectionName/SectionName";
import EventDetails from "../../components/eventDetails/EventDetails";

const AddEvents = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    location: "",
    maxAttendees: "",
  });

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // For edit modal
  const [detailsEvent, setDetailsEvent] = useState(null);   // For view details modal

  // Instance of EventService
  const eventService = new EventService();

  // Fetch events on mount
  useEffect(() => {
    eventService.getAllEvents().then((res) => {
      setEvents(res.content);
    });
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "maxAttendees") {
      newValue = Number(value);
    }
    if (name === "date") {
      // Ensure the value is in "YYYY-MM-DDTHH:mm:00" format
      newValue = value.length === 16 ? value + ":00" : value;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    eventService.createEvent(formData).then((res) => {
      setEvents((prev) => [...prev, res]);
      setFormData({
        title: "",
        description: "",
        date: "",
        category: "",
        location: "",
        maxAttendees: "",
      });
    });
  };

  // Handler for opening the edit modal
  const handleEdit = (event) => {
    setSelectedEvent(event);
  };

  // Handler for closing the edit modal
  const closeModal = () => {
    setSelectedEvent(null);
  };

  // Handler for opening the details section
  const handleViewDetails = (event) => {
    console.log("Evento clicado:", event);
    setDetailsEvent(event);
  };

  // Handler for closing the details section
  const closeDetails = () => setDetailsEvent(null);

  // Dummy handler for attendee list (implement as needed)
  const handleAttendeeList = (event) => {
    alert("Attendee list for: " + event.title);
  };

  return (
    <div className="container">
      <Navbar />
      <SectionName>Create an event</SectionName>

      <div className="upload-section">
        <h1 className="section-title">Upload your photos here:</h1>
        <UploadPhotos />
      </div>

      <div className="form-container">
        <h3 className="section-title">Enter your event details:</h3>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="title">Event name</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Date</label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="maxAttendees">Max attendees</label>
          <input
            type="number"
            id="maxAttendees"
            name="maxAttendees"
            value={formData.maxAttendees}
            onChange={handleChange}
            required
          />

          <label htmlFor="category">Type</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Presencial">Presential</option>
            <option value="Online">Online</option>
          </select>

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">About the event</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          ></textarea>

          <Button text="Save Changes" type="submit" />
        </form>
      </div>

      {events.map((event, index) => (
        <CardEvent
          key={event.id || index}
          title={event.title}
          description={event.description}
          date={event.date}
          category={event.category}
          location={event.location}
          maxAttendees={event.maxAttendees}
          buttons={[
            { text: "View details", onClick: () => handleViewDetails(event) },
            { text: "Edit", onClick: () => handleEdit(event) },
            { text: "Attendee list", onClick: () => handleAttendeeList(event) },
          ]}
        />
      ))}

      {/* Modal para editar evento */}
      <EventModal event={selectedEvent} onClose={closeModal} />

      {/* Sección para ver detalles del evento */}
      {detailsEvent && (
        <EventDetails event={detailsEvent} onClose={closeDetails} />
      )}
    </div>
  );
};

export default AddEvents;