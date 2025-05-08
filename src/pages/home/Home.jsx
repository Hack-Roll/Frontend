import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import styles from './Home.module.css';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />


      <img src="" alt=  "" />
      <div className={styles.content}>
        <h1>Welcome to Hack n' Roll!</h1>
        <p>
          The platform where hackers, coders, and dreamers come together to build the future in the world of tech.
          At Hack n' Roll, we organise hackathons, workshops, and tech events that drive innovation and collaboration. 
          Whether online or in person, this is where your ideas come to life alongside a passionate tech community.
          Ready to create something amazing?
          🔥Explore events, join the community, and get ready to hack the world.
        </p>
        <Footer />
       
      </div>
    </div>
  );
};

export default Home;