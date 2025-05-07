import React from "react";
import "./eventModal.css";
import Button from "../button/Button";
import SectionName from "../sectionName/SectionName";

const EventModal = ({ event, onClose, onCreateNew, onGoToDetails }) => {
  if (!event) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <SectionName>Event Details</SectionName>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2>Event Details</h2>
        <p>
          <strong>
            Mensaje si quieres modificar modalidad o fecha es necesario crear nuevo evento
          </strong>{" "}
          {event.title}
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
          <Button text="Create new event" onClick={onCreateNew} />
          <Button text="Go to event details" onClick={onGoToDetails} />
        </div>
      </div>
    </div>
  );
};

export default EventModal;