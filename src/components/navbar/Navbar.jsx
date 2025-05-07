import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import WhiteLogo from "../../assets/WhiteLogo.png";
import Button from "../button/button";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleAddEventsClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault(); // Evita la navegación
      alert("You must log in or register first to add events.");
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <img src={WhiteLogo} alt="Logo" className={styles.logo} />
        </NavLink>
      </div>
      <ul className={styles.navbarLinks}>
        <li>
          <NavLink
            to="/eventList"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            View Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addEvents"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={handleAddEventsClick} // Verifica si el usuario está logueado
          >
            Add Events
          </NavLink>
        </li>
        <li>
          {isLoggedIn ? (
            <Button text="Logout" onClick={handleLogout} />
          ) : (
            <NavLink to="/loginRegister">
              <Button text="Login" />
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;