import React from "react";
import "./EventModal.css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const EventModal = ({ event, onClose, onCreateNew, onGoToDetails }) => {
  if (!event) return null;

  const navigate = useNavigate();

const handleCreateNew = () => {
  navigate("/add-events"); // Ajusta la ruta según tu configuración
};

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2>Notice</h2>
        <p>
          If you want to modify the modality or date, you need to create a new event.
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
          <Button text="Create new event" onClick={onCreateNew} />
        </div>
      </div>
    </div>
  );
};

export default EventModal;