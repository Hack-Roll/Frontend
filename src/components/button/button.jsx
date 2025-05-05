import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx'; // Asegúrate de instalar clsx: npm install clsx

const Button = ({ type = 'button', onClick, size = 'medium', children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={(styles.button, styles[size], className)}
    >
      {children}
    </button>
  );
};

export default Button;