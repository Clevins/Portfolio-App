import { FC } from "react";
import ArrowIcon from "@icons/ArrowIcon.svg";
import getSkills from "@lib/getSkills";
import Skill from "./Skill";
import styles from "./Skills.module.css";

import React from "react";
import { Fade } from "react-reveal";

const Skills: FC = () => {
  let delay = 0;
  const skillDelay = 150;
  return (
    <div className={styles.skills}>
      <div className={styles.skills__header}>Skills</div>
      <div className={styles.skills__list}>
        {getSkills.map((skill) => {
          delay += skillDelay;
          console.log(skillDelay);
          return (
            <Fade top delay={delay}>
              <Skill data={skill} />
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
