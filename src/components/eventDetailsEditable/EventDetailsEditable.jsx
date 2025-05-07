import React from "react";
import "./EventDetailsEditable.css";
import Button from "../button/Button";
import SectionName from "../sectionName/SectionName";

const EventDetailsEditable = ({ eventData, onChange, onSave, onCancel, onClose }) => {
  if (!eventData) return null;

  return (
    <div className="event-details-container">
       <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <SectionName>Edit Event</SectionName>
      <div className="event-details-content">
        <div className="form-group">
          <label>Nombre del evento</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={onChange}
          />
        </div>

        <div className="form-group flex-row">
          <label>Modalidad</label>
          <select
            name="category"
            value={eventData.category}
            onChange={onChange}
            disabled
          >
            <option value="Presencial">Presencial</option>
            <option value="Online">Online</option>
          </select>
          <small className="info-message">
            If you want to modify the event type, you need to create a new event.
          </small>
        </div>

        <div className="form-group">
          <label>Fecha</label>
          <input
            type="datetime-local"
            name="date"
            value={eventData.date}
            onChange={onChange}
            disabled
          />
          <small className="info-message">
            If you want to modify the date, you need to create a new event.
          </small>
        </div>

        <div className="form-group">
          <label>Dirección o modalidad online</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label>Sobre el evento</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label>Max asistentes</label>
          <input
            type="number"
            name="maxAttendees"
            value={eventData.maxAttendees}
            onChange={onChange}
          />
        </div>

        <div className="event-details-buttons">
          <Button text="Guardar" onClick={onSave} />
          <Button text="Delete Event" onClick={onCancel} />
        </div>
      </div>
    </div>
  );
};

export default EventDetailsEditable;