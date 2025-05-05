import React, { useState, useEffect } from "react";
import "./AddEvents.css";
import Navbar from "../../components/navbar/Navbar";
import UploadPhotos from "../../components/uploadPhotos/UploadPhotos";
import CardEvent from "../../components/cardEvent/CardEvent";
import Button from "../../components/button/Button";
import { EventService } from "../../Service/EventService";

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

  // Crear una instancia de la clase EventService
  const eventService = new EventService();

  // useEffect para obtener los eventos al cargar el componente
  useEffect(() => {
    eventService.getAllEvents().then((res) => {
      setEvents((prev) => res.content);
    });
  }, []); // <-- empty array means "run once"

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the server
    eventService.createEvent(formData).then((res) => {
      // Update the events state with the new event
      setEvents((prev) => [...prev, res]);

      // Clear the form
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

  return (
    <div className="container">
      <Navbar />

      <h2 className="main-title">Crear un evento</h2>

      <div className="upload-section">
        <h3 className="section-title">Sube tus fotos aquí:</h3>
        <UploadPhotos />
      </div>

      <div className="form-container">
        <h3 className="section-title">Ingresa los detalles de tu evento:</h3>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="eventName">Nombre del evento</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Fecha</label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="maxAttendees">Máximo de asistentes</label>
          <input
            type="number"
            id="maxAttendees"
            name="maxAttendees"
            value={formData.maxAttendees}
            onChange={handleChange}
            required
          />

          <label htmlFor="location">Dirección o modalidad online</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Presencial">Presential</option>
            <option value="Online">Online</option>
          </select>

          {/* TODO: Only show if category is "Presential" */}
          <label htmlFor="location">Ubicación</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">Sobre el evento</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          ></textarea>

          {/* <button type="submit" className="submit-btn">Save Cahnges </button> */}
          <Button text="Save Changes" type="submit" />
        </form>
      </div>

      <h3 className="section-title">Mis eventos creados</h3>
      {events.map((event, index) => (
        <CardEvent
          key={index}
          title={event.title}
          description={event.description}
          date={event.date}
          category={event.category}
          location={event.location}
          maxAttendees={event.maxAttendees}
        />
      ))}
    </div>
  );
};

export default AddEvents;
