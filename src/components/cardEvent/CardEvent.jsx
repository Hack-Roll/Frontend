import React from 'react';
import './CardEvent.css';
import Button from '../button/Button';

const CardEvent = ({ eventName, company, date }) => {
  return (
    <div className="card-event">
      <div className="card-content">
        <p><strong>Nombre del evento</strong></p>
        <p>{eventName}</p>
        <p><strong>Empresa</strong></p>
        <p>{company}</p>
        <p><strong>Fecha del evento</strong></p>
        <p>{date}</p>
      </div>
      <div className="card-buttons">
        <Button texto="Ver o editar evento" />
        <Button texto="Ver lista de asistentes" />
      </div>
    </div>
  );
};

export default CardEvent;
