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
      setSuccessMessage(`Hi ${formData.firstName}, your account has been created successfully! You will be redirected to the homepage shortly.`);
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
          setSuccessMessage("You have logged in. You will be redirected to the homepage shortly.");
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
      <h2 className={styles.title}>{isLogin ? "Log in" : "Register"}</h2>
      <form onSubmit={isLogin ? handleLoginSubmit : handleRegisterSubmit}>
        {isLogin ? (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Registered email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.btnLogin}>Log in</button>
          </>
        ) : (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name(s)"
                required
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last names(s)"
                required
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Password. Your password can contain letters, numbers and the symbols _ - .</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create your password"
                required
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.btnRegister}>Sign up</button>
          </>
        )}
      </form>
      
      {successMessage && (
          <p className={styles.successMessage}>{successMessage}</p>
        )}
      <p className={styles.toggleText}>
        {isLogin
          ? "Don't have an account with us?"
          : "Do you already have an account with us?"}
        <button type="button" onClick={toggleForm} className={styles.toggleButton}>
          {isLogin ? "Sign up here" : "Log in here"}
        </button>
      </p>
    </div>
            </>
  );
};


export default LoginRegister;