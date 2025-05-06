import React, { useState } from 'react';
import './AddEvents.css';
import Navbar from '../../components/navbar/Navbar';
import UploadPhotos from '../../components/uploadPhotos/UploadPhotos';
import CardEvent from '../../components/cardEvent/CardEvent';
import Button from '../../components/button/Button';

const AddEvents = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    location: '',
    description: '',
    company: ''
  });

  const [events, setEvents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents((prev) => [...prev, formData]);
    setFormData({
      eventName: '',
      date: '',
      location: '',
      description: '',
      company: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setEvents((prev) => [...prev, formData]);
  //   setFormData({
  //     eventName: '',
  //     date: '',
  //     location: '',
  //     description: '',
  //     company: ''
  //   });
  // };

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
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />

          <label htmlFor="company">Empresa</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Fecha</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="location">Dirección o modalidad online</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Presencial">Presencial</option>
            <option value="Online">Online</option>
          </select>

          <label htmlFor="description">Sobre el evento</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          ></textarea>

          {/* <button type="submit" className="submit-btn">Save Cahnges </button> */}
          <Button text="Save Changes" type="submit"/>
        </form>
      </div>

      <h3 className="section-title">Mis eventos creados</h3>
      {events.map((event, index) => (
        <CardEvent
          key={index}
          eventName={event.eventName}
          company={event.company}
          date={event.date}
        />
      ))}
    </div>
  );
};

export default AddEvents;
