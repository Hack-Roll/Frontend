import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginRegister.module.css";
import Navbar from "../../components/navbar/Navbar";
import { UserService } from "../../Service/UserService";

const LoginRegister = () => {
  const [users, setUsers] = useState([]);
  const userService = new UserService();
  const navigate = useNavigate(); 
  const [successMessage, setSuccessMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true); 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setSuccessMessage("");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    userService.createUser(formData).then((res) => {
      setUsers((prev) => [...prev, res]);
      setSuccessMessage(`Hi ${formData.firstName}, your account has been created successfully!`);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      
      setTimeout(() => {
        navigate("/");
      }, 4000);
    }).catch((err) => {
      console.error("Registration error:", err);
      setSuccessMessage("");
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    userService.login({ email: formData.email, password: formData.password })
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem("token", res.token);
          setSuccessMessage("You have logged in");
          setTimeout(() => {
            navigate("/");
          }, 4000);
        } else {
          console.error("Token not received:", res);
          setSuccessMessage("");
        }
      })
      .catch((err) => {
        console.error("Error when signing in:", err);
        setSuccessMessage("");
      });
  };

 
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }; 


  return (

            <>
            <Navbar/>
            
            
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>{isLogin ? "Log In" : "Registro"}</h2>
      <form onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}>
        {isLogin ? (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email de registro</label>
              <input
                type="email"
                id="email"
                placeholder="Ingresa tu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                required
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.btnLogin}>Log In</button>
          </>
        ) : (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>Nombre</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Ingresa tu nombre"
                required
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>Apellido</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Ingresa tu apellido"
                required
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa tu correo"
                required
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Crea una contraseña"
                required
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.btnRegister}>Registrarse</button>
          </>
        )}
      </form>
      
      {successMessage && (
          <p className={styles.successMessage}>{successMessage}</p>
        )}
      <p className={styles.toggleText}>
        {isLogin
          ? "¿No tienes cuenta? "
          : "¿Ya tienes cuenta? "}
        <button type="button" onClick={toggleForm} className={styles.toggleButton}>
          {isLogin ? "Regístrate aquí" : "Inicia sesión aquí"}
        </button>
      </p>
    </div>
            </>
  );
};


export default LoginRegister;