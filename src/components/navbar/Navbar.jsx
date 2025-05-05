import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import WhiteLogo from "../../assets/WhiteLogo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
        <img src={WhiteLogo} alt="Logo" className={styles.logo} />
        </NavLink>
      </div>
      <ul className={styles.navbarLinks}>
        <li><NavLink to="/eventList" className={({ isActive }) => isActive ? styles.active : ''}>Events</NavLink></li>
        <li><NavLink to="/addEvents" className={({ isActive }) => isActive ? styles.active : ''}>Add Events</NavLink></li>
        <li><NavLink to="/userProfile" className={({ isActive }) => isActive ? styles.active : ''}>Profile</NavLink></li>
        <li><NavLink to="/loginRegister" className={({ isActive }) => isActive ? styles.active : ''}>Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;