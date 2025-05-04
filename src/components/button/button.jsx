import styles from "../button/Button.module.css";


function Boton({ texto }) {
  return <button className={styles.boton}>{texto}</button>;
}