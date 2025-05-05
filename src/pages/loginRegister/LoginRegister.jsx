import React, { useState } from "react";
import styles from "./LoginRegister.module.css";
import Navbar from "../../components/Navbar/Navbar";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); 

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (

            <>
            <Navbar/>
            
            
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>{isLogin ? "Log In" : "Registro"}</h2>
      <form>
        {isLogin ? (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email de registro</label>
              <input
                type="email"
                id="email"
                placeholder="Ingresa tu email"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Ingresa tu contraseña"
                required
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
                placeholder="Ingresa tu nombre"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>Apellido</label>
              <input
                type="text"
                id="lastName"
                placeholder="Ingresa tu apellido"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="Ingresa tu correo"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Crea una contraseña"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="photo" className={styles.label}>Subir foto (opcional)</label>
              <input
                type="file"
                id="photo"
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.btnRegister}>Registrarse</button>
          </>
        )}
      </form>
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