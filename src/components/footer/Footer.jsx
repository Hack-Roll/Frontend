import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src="../assets/Black<logo.png" alt="Hack n' Roll Logo" className={styles.logo} />
      </div>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="../assets/InstaIcon.png" alt="Instagram" className={styles.icon} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="../assets/FacebookIcon.png" alt="Facebook" className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="../assets/LinkedinIcon.png" alt="LinkedIn" className={styles.icon} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="../assets/YoutubeIcon.png" alt="YouTube" className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;