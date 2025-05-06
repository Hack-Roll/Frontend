import React, { useState, useEffect } from "react";
import "./AddEvents.css";
import Navbar from "../../components/navbar/Navbar";
import UploadPhotos from "../../components/uploadPhotos/UploadPhotos";
import CardEvent from "../../components/cardEvent/CardEvent";
import Button from "../../components/button/Button";
import { EventService } from "../../Service/EventService";
import EventModal from "../../components/EventModal/EventModal";

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
  const [selectedEvent, setSelectedEvent] = useState(null); // For modal

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

  // Modal handlers
  const handleViewEvent = async (event) => {
    console.log("Event clicked for modal:", event); // <-- Agrega este log
    // Opcional: obtener datos frescos
    // const freshEvent = await eventService.getEventById(event.id);
    setSelectedEvent(event); // o setSelectedEvent(freshEvent);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="container">
      <Navbar />

      <h2 className="main-title">Create an event</h2>

      <div className="upload-section">
        <h3 className="section-title">Upload your photos here:</h3>
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
          key={index}
          title={event.title}
          description={event.description}
          date={event.date}
          category={event.category}
          location={event.location}
          maxAttendees={event.maxAttendees}
          onView={() => handleViewEvent(event)}
        />
      ))}

      <EventModal event={selectedEvent} onClose={closeModal} />
    </div>
  );
};

export default AddEvents;