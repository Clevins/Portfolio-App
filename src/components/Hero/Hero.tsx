import { FC } from "react";

import HeroOverlay from "@components/HeroOverlay";
import HeroImage from "@assets/img/hero1.jpg";

import styles from "./Hero.module.css";

const Hero: FC = () => {
  return (
    <>
      <div className={styles.hero}>
        <div
          className={styles.hero__image}
          style={{ backgroundImage: `url('${HeroImage}')` }}
        />
        <HeroOverlay />
      </div>
    </>
  );
};

export default Hero;
