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
  onView, // function to view or edit event
  onDetails, // function to view event details
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
        <Button text="View details" onClick={onDetails} />
        <Button
          text="Edit"
          onClick={() => {
            console.log("Button clicked!", title);
            onView();
          }}
        />
        <Button text="Attendee list" />
      </div>
    </div>
  );
};

export default CardEvent;
