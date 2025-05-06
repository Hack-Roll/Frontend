import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import WebImage from "../../assets/webImage.png";
import CardEvent from "../../components/cardEvent/CardEvent";
import SectionName from "../../components/sectionName/SectionName";
import "./EventList.css";
import { EventService } from "../../Service/EventService";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const eventService = new EventService();

  useEffect(() => {
    eventService.getAllEvents().then((res) => {
      setEvents(res.content || []);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <SectionName>Event List</SectionName>
      <div className="event-list-container">
        <img src={WebImage} alt="Event" className="event-list-image" />
        <div className="event-card-wrapper">
          {events.length === 0 ? (
            <p>No events found.</p>
          ) : (
            events.map((event, idx) => (
              <CardEvent
                key={event.id || idx}
                title={event.title}
                description={event.description}
                date={event.date}
                category={event.category}
                location={event.location}
                maxAttendees={event.maxAttendees}
                onView={() => {}}
                onDetails={() => {}}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;
