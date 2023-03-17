import { FC } from "react";
import ArrowIcon from "@icons/ArrowIcon.svg";

import stlyes from "./HeroOverlay.module.css";

const HeroOverlay: FC = () => {
  return (
    <div className={stlyes.heroOverlay}>
      <div className={stlyes.detials}>
        <h2 className={stlyes.detials__name}>Cormac Levins</h2>
        <h2 className={stlyes.detials__job}>Web Developer</h2>
        <h3 className={stlyes.detials__location}>Vancouver, BC, Canada</h3>
      </div>

      <button
        className={stlyes.heroOverlay__icon}
        onClick={() => alert("click")}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default HeroOverlay;
