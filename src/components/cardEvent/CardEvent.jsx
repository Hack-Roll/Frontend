import React from "react";
import "./CardEvent.css";
import Button from "../button/Button";

const CardEvent = ({
  title,
  description,
  date,
  category,
  location,
  maxAttendees,
}) => {
  return (
    <div className="card-event">
      <div className="card-content">
        <div className="event-title">{title}</div>
        <p>{description}</p>
        <div>{date}</div>
        <div>{category}</div>
        {/* TODO: Only show if category is "Presential" */}
        <div>{location}</div>
        <div>Max attendees: {maxAttendees}</div>
      </div>

      <div className="card-buttons">
        <Button text="Ver o editar evento" />
        <Button text="Ver lista de asistentes" />
      </div>
    </div>
  );
};

export default CardEvent;
