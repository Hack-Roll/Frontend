import React, { forwardRef } from "react";
import "./eventDetails.css";
import Button from "../button/Button";
import SectionName from "../sectionName/SectionName";
import Location from "../../assets/icons/Location.svg";
import Calendary from "../../assets/icons/Calendary.svg";

const EventDetails = forwardRef(({ event, onClose }, ref) => {
  if (!event) return null;

  return (
    <div ref={ref} className="event-details-container">
      <SectionName>Event Details</SectionName>
      <div className="event-details-content">
        <div className="form-group">
          <label>Nombre del evento</label>
          <div>{event.title}</div>
        </div>

        <div className="form-group flex-row">
          <label>Modalidad</label>
          <div className="category-badge">{event.category}</div>
        </div>

        <div className="form-group">
          <label>Fecha</label>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img
              src={Calendary}
              alt="Calendary"
              style={{ marginRight: 4, width: 20, height: 20 }}
            />
            <span>{event.date}</span>
          </div>
        </div>

        <div className="form-group">
          <label>Dirección o modalidad online</label>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img
              src={Location}
              alt="Location"
              style={{ marginRight: 4, width: 20, height: 20 }}
            />
            <span>{event.location}</span>
          </div>
        </div>

        <div className="form-group">
          <label>Sobre el evento</label>
          <div>{event.description}</div>
        </div>

        <div className="form-group">
          <label>Max attendees</label>
          <div>{event.maxAttendees}</div>
        </div>

        <div className="event-details-buttons">
          <Button text="Close" onClick={onClose} />
        </div>
      </div>
    </div>
  );
});

export default EventDetails;
