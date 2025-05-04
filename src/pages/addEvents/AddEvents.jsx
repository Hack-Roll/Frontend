// import React, { useState } from 'react'

// const AddEvents = () => {
//   return (
//     <div>
//       <h1>Agregar Eventos</h1>
//     </div>
//   )
// }

// export default AddEvents


import React, { useState } from 'react';
import styles from './AddEvents.module.css';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/ui/Button';

const AddEvents = () => {
  const [evento, setEvento] = useState({
    nombre: '',
    fecha: '',
    direccion: '',
    descripcion: '',
  });

  const handleChange = (e) => {
    setEvento({ ...evento, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    console.log('Evento guardado:', evento);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <h2>Crear un evento</h2>

      <div className={styles.subirFotos}>
        <div className={styles.fotoPrincipal}>+</div>
        <div className={styles.fotosExtra}>
          <div>+</div><div>+</div><div>+</div>
        </div>
      </div>

      <form className={styles.formulario}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del evento"
          onChange={handleChange}
        />
        <input
          type="date"
          name="fecha"
          onChange={handleChange}
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección o modalidad online"
          onChange={handleChange}
        />
        <textarea
          name="descripcion"
          placeholder="Sobre el evento"
          onChange={handleChange}
        />

        <Button onClick={handleGuardar} text="Guardar cambios" />
      </form>
    </div>
  );
};

export default AddEvents;