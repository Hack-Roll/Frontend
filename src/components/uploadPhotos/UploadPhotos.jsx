import React, { useState } from 'react';
import './UploadPhotos.css';

const UploadPhotos = () => {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages].slice(0, 4));
  };

  return (
    <div className="upload-container">
      <div className="upload-box main-box">
        <input type="file" accept="image/*" multiple onChange={handleUpload} />
        {images[0] ? (
          <img src={images[0]} alt="main" />
        ) : (
          <span className="plus">+</span>
        )}
      </div>

      <div className="thumbnail-container">
        {[1, 2, 3].map((i) => (
          <div className="upload-box small-box" key={i}>
            <input type="file" accept="image/*" onChange={handleUpload} />
            {images[i] ? (
              <img src={images[i]} alt={`thumbnail-${i}`} />
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
