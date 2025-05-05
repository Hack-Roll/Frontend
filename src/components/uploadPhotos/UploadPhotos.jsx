import React, { useState } from 'react';
import './UploadPhotos.css';

const UploadPhotos = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...newImages]);
  };

  return (
    <div className="upload-container">
      <p className="title">Sube tus fotos aquí</p>

      <label className="upload-box main-box">
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
        <span className="plus">+</span>
      </label>

      <div className="thumbnail-container">
        {[0, 1, 2].map((i) => (
          <div key={i} className="upload-box small-box">
            {images[i] ? (
              <img src={images[i]} alt={`Foto ${i + 1}`} />
            ) : (
              <span className="plus">+</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadPhotos;
