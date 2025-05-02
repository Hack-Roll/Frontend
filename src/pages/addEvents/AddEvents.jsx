import React, { useState } from 'react';

const AddEvents = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        location: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Evento agregado:', formData);
        alert('Evento agregado exitosamente');
        setFormData({ title: '', description: '', date: '', location: '' });
    };

    return (
        <div>
            <h1>Agregar Eventos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Título del evento"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Descripción del evento"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Ubicación del evento"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Agregar Evento</button>
            </form>
        </div>
    );
};

export default AddEvents;