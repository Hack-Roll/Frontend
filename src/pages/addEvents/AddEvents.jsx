import React, { useState, useEffect } from "react";
import "./AddEvents.css";
import Navbar from "../../components/navbar/Navbar";
import UploadPhotos from "../../components/uploadPhotos/UploadPhotos";
import CardEvent from "../../components/cardEvent/CardEvent";
import Button from "../../components/button/Button";
import { EventService } from "../../Service/EventService";
import SectionName from "../../components/sectionName/SectionName";
import EventDetails from "../../components/eventDetails/EventDetails";
import EventDetailsEditable from "../../components/eventDetailsEditable/EventDetailsEditable";

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
  const [selectedEvent, setSelectedEvent] = useState(null); 
  const [editableEvent, setEditableEvent] = useState(null); 

  const eventService = new EventService();

  useEffect(() => {
    eventService.getAllEvents().then((res) => {
      setEvents(res.content);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = name === "maxAttendees" ? Number(value) : value;
    if (name === "date" && value.length === 16) {
      newValue += ":00";
    }
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

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

  const handleEdit = (event) => {
    setEditableEvent({ ...event });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditableEvent((prev) => ({
      ...prev,
      [name]: name === "maxAttendees" ? Number(value) : value,
    }));
  };

  const handleEditSave = () => {
    eventService.updateEvent(editableEvent.id, editableEvent).then((updatedEvent) => {
      setEvents((prev) =>
        prev.map((ev) => (ev.id === updatedEvent.id ? updatedEvent : ev))
      );
      setEditableEvent(null);
    });
  };

  const handleEditCancel = () => {
    setEditableEvent(null);
  };

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeDetails = () => {
    setSelectedEvent(null);
  };

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
          <label htmlFor="title">Name of event</label>
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
            <option value="Presencial">In person</option>
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

          <Button text="Save" type="submit" />
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
      {selectedEvent && (
        <EventDetails event={selectedEvent} onClose={closeDetails} />
      )}
      {editableEvent && (
        <EventDetailsEditable
          eventData={editableEvent}
          onChange={handleEditChange}
          onSave={handleEditSave}
          onCancel={handleEditCancel} 
          onClose={handleEditCancel} 
        />
      )}
      
    </div>
  );
};

export default AddEvents;
