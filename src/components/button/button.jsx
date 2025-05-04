import styles from "../button/Button.module.css";


function Button({ texto }) {
  return <button className={styles.boton}>{texto}</button>;
}

export default Button;