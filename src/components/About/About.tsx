import { FC } from "react";
import ArrowIcon from "@icons/ArrowIcon.svg";

import stlyes from "./About.module.css";
import Details from "./Details";
import Profile from "./Profile";

const About: FC = () => {
  return (
    <div className={stlyes.aboutMe}>
      <Profile />
      <Details />
    </div>
  );
};

export default About;
