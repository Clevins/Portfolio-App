import { FC } from "react";
import { ButtonProps } from "@lib/customTypes";

import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({ useLg, label, onClick }) => {
  return (
    <button
      className={`${styles.button} ${useLg ? styles["button--lg"] : ""} `}
      onClick={onClick}
      disabled
    >
      <p>{label}</p>
    </button>
  );
};

export default Button;
