import React, { useState } from 'react';
import './AddEvents.css';
import Navbar from '../../components/navbar/Navbar';
import UploadPhotos from '../../components/uploadPhotos/UploadPhotos';

// para crear nuevos eventos
const AddEvents = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    location: '',
    description: ''
  }); // objeto formData nos almacena los datos del formulario
  // useState para manejar el estado del formulario


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }; //handler se ejecuta cada vez que el usuario escribe o selecciona algo.
  // Actualiza el estado del formulario con los nuevos valores

  
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    console.log('Submitted event data:', formData);
  }; // funcion ejecuta al hacer clic en el botón Save Changes. 
  // Evita que la página se recargue y muestra los datos por consola.


  return (
    <div className="container">
      <Navbar />

      {/* Contenedor del formulario */}
      <div className="form-container">
        <h2>Enter your event details:</h2>

        {/* Componente para subir fotos */}
        <UploadPhotos />

        {/* Formulario */}
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="location">Address or Online Mode</label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="in-person">In Person</option>
            <option value="online">Online</option>
          </select>

          <label htmlFor="description">About the Event</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          ></textarea>

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default AddEvents;