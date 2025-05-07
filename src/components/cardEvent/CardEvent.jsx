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
  buttons = [], // Array de { text, onClick }
}) => {
  return (
    <div className="card-event">
      <div className="card-content">
        <div className="event-title">{title}</div>
        <p>{description}</p>
        <div>{date}</div>
        <div>{category}</div>
        {category === "Presencial" && <div>{location}</div>}
        <div>Max attendees: {maxAttendees}</div>
      </div>
      <div className="card-buttons">
        {buttons.map((btn, idx) => (
          <Button key={idx} text={btn.text} onClick={btn.onClick} />
        ))}
      </div>
    </div>
  );
};

export default CardEvent;