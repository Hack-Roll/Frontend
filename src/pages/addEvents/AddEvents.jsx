import React, { useState } from 'react';
import './AddEvents.css';
import Navbar from '../../components/navbar/Navbar';
import UploadPhotos from '../../components/uploadPhotos/UploadPhotos';

const AddEvents = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted event data:', formData);
  };

  return (
    <div className="container">
      <Navbar />

      <h2 className="main-title">Crear un evento</h2>

      {/* Subir fotos fuera del formulario */}
      <div className="upload-section">
        <h3 className="section-title">Sube tus fotos aquí:</h3>
        <UploadPhotos />
      </div>

      {/* Contenedor del formulario */}
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
            <option value="in-person">Presencial</option>
            <option value="online">Online</option>
          </select>

          <label htmlFor="description">Sobre el evento</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          ></textarea>

          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    </div>
  );
};

export default AddEvents;
