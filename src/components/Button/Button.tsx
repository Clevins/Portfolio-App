import { FC } from "react";
import { ButtonProps } from "@lib/customTypes";

import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled>
      <p>{label}</p>
    </button>
  );
};

export default Button;
