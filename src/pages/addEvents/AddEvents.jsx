import React, { useState } from 'react';
import './AddEvents.css';
import Navbar from '../../components/navbar/Navbar';

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
    // Contenedor principal
    <div className="container"> 
           <Navbar />
      {/* Contenedor del formulario*/}
      <div className="form-container">
        <h2>Enter your event details:</h2>
        {/* Formulario con evento onSubmit */}
        <form className="form" onSubmit={handleSubmit}>
        {/* indica que cuando el usuario haga clic en Save Changes, se ejecutará la función handleSubmit */}

          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />{/* Campo para el nombre del evento */}

          
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />{/* Campo para la fecha */}

          {/* Selector para el tipo de ubicación */}
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
          {/* Área de texto para la descripción */}

          
          <button type="submit">Save Changes</button>
          {/* Botón para enviar el formulario */}
        </form>
      </div>
    </div>
  );
};

// Exportación del componente
export default AddEvents;