import { FC } from "react";

import Details from "./Details";
import Profile from "./Profile";

import stlyes from "./About.module.css";
import Fade from "@components/Fade";
import { FadeDirection } from "@lib/customTypes";

const About: FC = () => {
  return (
    <div className={stlyes.aboutMe} id={"about"}>
      <div className={stlyes.about__profile}>
        <Fade direction={FadeDirection.RIGHT}>
          <Profile />
        </Fade>
      </div>

      <div className={stlyes.about__profile}>
        <Fade direction={FadeDirection.LEFT}>
          <Details />
        </Fade>
      </div>
    </div>
  );
};

export default About;
