import { FC } from "react";
import Typewriter from "typewriter-effect";

import ArrowIcon from "@icons/ArrowIcon.svg";

import stlyes from "./HeroOverlay.module.css";

const HeroOverlay: FC = () => {
  const typeWriterOptions = {
    strings: ["Web Developer", "JavaScript Dev", "Front-End"],
    autoStart: true,
    loop: true,
  };

  const scrollBtnOnClick = () => {
    const aboutMeElement = document.getElementById("about")!;
    aboutMeElement.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div className={stlyes.overlay}>
      <div className={stlyes.overlay__details}>
        <h2 className={stlyes.overlay__name}>Cormac Levins</h2>
        <h2 className={stlyes.overlay__job}>
          <Typewriter options={typeWriterOptions} />
        </h2>
        <h3 className={stlyes.overlay__location}>Dublin, Ireland</h3>
      </div>

      <button
        aria-label="Scroll Down Button"
        className={stlyes.overlay__icon}
        onClick={() => scrollBtnOnClick()}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default HeroOverlay;
