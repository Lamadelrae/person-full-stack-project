import React from "react";
import styles from "./button.module.css";

interface IButtonProperties {
  text: string;
  onClick: () => void;
}

const Button: React.FC<IButtonProperties> = ({ text, onClick }) => {
  return (
    <button onClick={() => onClick()} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
