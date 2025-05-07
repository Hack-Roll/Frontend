import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import CardEvent from "../../components/cardEvent/CardEvent";
import SectionName from "../../components/sectionName/SectionName";
import EventDetails from "../../components/eventDetails/EventDetails";
import "./EventList.css";
import { EventService } from "../../Service/EventService";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // Estado para el evento seleccionado
  const eventService = new EventService();

  useEffect(() => {
    eventService.getAllEvents().then((res) => {
      setEvents(res.content || []);
    });
  }, []);

  const handleViewDetails = (event) => {
    setSelectedEvent(event); // Establece el evento seleccionado
  };

  const closeDetails = () => {
    setSelectedEvent(null); // Cierra el componente EventDetails
  };

  return (
    <div>
      <Navbar />
      <SectionName>Event List</SectionName>
      <div className="event-list-container">
        <div className="event-card-wrapper">
          {events.length === 0 ? (
            <p>No events found.</p>
          ) : (
            events.map((event, idx) => (
              <CardEvent
                key={idx}
                title={event.title}
                description={event.description}
                date={event.date}
                category={event.category}
                location={event.location}
                maxAttendees={event.maxAttendees}
                buttons={[
                  {
                    text: "View details",
                    onClick: () => handleViewDetails(event),
                  },
                ]}
              />
            ))
          )}
        </div>
      </div>
      {selectedEvent && (
        <EventDetails event={selectedEvent} onClose={closeDetails} />
      )}
    </div>
  );
};

export default EventList;