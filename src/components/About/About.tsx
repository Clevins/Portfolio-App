import { FC } from "react";
import ArrowIcon from "@icons/ArrowIcon.svg";

import React from "react";
// import { Fade } from "react-reveal";
import { motion } from "framer-motion";

import stlyes from "./About.module.css";
import Details from "./Details";
import Profile from "./Profile";
import FadeRight from "@components/FadeRight/FadeRight";
import FadeLeft from "@components/FadeLeft/FadeLeft";

const About: FC = () => {
  return (
    <div className={stlyes.aboutMe} id={"about"}>
      {/* <Fade left>
        <Profile />
      </Fade>
      <Fade right>
       
      </Fade> */}
      {/* <Profile /> */}
      {/* <Fade left> */}
      {/* <div className={"pt-10 lg:pr-20 lg:w-1/2 w-full"}> */}
      <div className="pt-10 lg:pr-20 lg:w-1/2 w-full">
        <FadeRight>
          <Profile />
        </FadeRight>
      </div>

      {/* </div> */}
      {/* </Fade> */}

      <div className="pt-10 lg:pl-20 lg:w-1/2 w-full">
        <FadeLeft>
          <Details />
        </FadeLeft>
      </div>

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
