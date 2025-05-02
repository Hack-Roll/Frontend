import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''} exact>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </NavLink>
      </div>
      <ul className={styles.navbarLinks}>
        <li><NavLink to="/eventList" className={({ isActive }) => isActive ? styles.active : ''}>Eventos</NavLink></li>
        <li><NavLink to="/addEvents" className={({ isActive }) => isActive ? styles.active : ''}>Añadir Evento</NavLink></li>
        <li><NavLink to="/userProfile" className={({ isActive }) => isActive ? styles.active : ''}>Perfil</NavLink></li>
        <li><NavLink to="/loginRegister" className={({ isActive }) => isActive ? styles.active : ''}>Iniciar Sesión</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;