import { FC } from "react";
import { ButtonProps } from "@lib/customTypes";

import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({
  onClick,
  isDisabled = false,
  children,
  useLg,
}) => {
  return (
    <button
      className={`${styles.button} ${useLg ? styles["button--lg"] : ""} `}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
