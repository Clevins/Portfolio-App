import { FC } from "react";
import ArrowIcon from "@icons/ArrowIcon.svg";
import getSkills from "@lib/getSkills";
import Skill from "./Skill";
import styles from "./Skills.module.css";

import React from "react";
import { motion } from "framer-motion";
// import { Fade } from "react-reveal";

const Skills: FC = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: -50, opacity: 0 },

    visible: {
      y: 0,
      opacity: 1,
    },
  };

  let delay = 0;
  const skillDelay = 50;
  return (
    <div className={styles.skills}>
      <div className={styles.skills__header}>Skills</div>
      <motion.ul
        className={styles.skills__list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
        // variants={{
        //   visible: { opacity: 1, y: 0 },
        //   hidden: { opacity: 0, y: 40 },
        // }}
      >
        {getSkills.map((skill, i) => {
          delay += skillDelay;
          return (
            // <Fade top delay={delay}>
            <motion.li variants={item} key={i}>
              <Skill data={skill} />
            </motion.li>

            // </Fad/e>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Skills;
