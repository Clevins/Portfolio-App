import { FC } from "react";
import HeroOverlay from "@components/HeroOverlay";

import styles from "./Hero.module.css";

const Hero: FC = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__image} />
        <HeroOverlay />
      </div>
    </>
  );
};

export default Hero;
