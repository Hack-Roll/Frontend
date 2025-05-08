import React from "react";
import styles from "./Footer.module.css";
import WhiteLogo from "./../../assets/WhiteLogo.png";
import Instagram from "./../../assets/InstaIcon.png";
import Facebook from "./../../assets/FacebookIcon.png";
import LinkedIn from "./../../assets/LikedinIcon.png";
import Youtube from "./../../assets/YoutubeIcon.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={WhiteLogo} alt="Hack n' Roll Logo" className={styles.logo} />
      </div>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram" className={styles.icon} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="Facebook" className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="LinkedIn" className={styles.icon} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={Youtube} alt="YouTube" className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;