import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <SectionName>Event List</SectionName>
      <h1>Bienvenido a la página de inicio</h1>
      <p>Explora los eventos y más desde aquí.</p>
    </div>
  );
};

export default Home;