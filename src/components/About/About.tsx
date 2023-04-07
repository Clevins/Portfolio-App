import { FC } from "react";
import ArrowIcon from "@icons/ArrowIcon.svg";

import React from "react";
import { Fade } from "react-reveal";

import stlyes from "./About.module.css";
import Details from "./Details";
import Profile from "./Profile";

const About: FC = () => {
  return (
    <div className={stlyes.aboutMe} id={"about"}>
      {/* <Fade left>
        <Profile />
      </Fade>
      <Fade right>
       
      </Fade> */}
      {/* <Profile /> */}
      <Fade left>
        <div className={"pt-10 lg:pr-20 lg:w-1/2 w-full"}>
          <Profile />
        </div>
      </Fade>
      <Details />

      {/* <Fade right>
        <div className={"pt-10 lg:pr-20 lg:w-1/2 w-full"}>
          <Details />
        </div>
      </Fade> */}

      {/* <Zoom>
  <div className="some-class">
    <CustomComponent />   
  </div>
</Zoom> */}
      {/* <Details /> */}
    </div>
  );
};

export default About;
