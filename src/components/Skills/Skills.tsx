import { FC } from "react";
import { motion } from "framer-motion";
import getSkills from "@lib/getSkills";
import Skill from "./Skill";

import styles from "./Skills.module.css";

const Skills: FC = () => {
  const listItemAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className={styles.skills}>
      <div className={styles.skills__header}>Skills</div>
      <motion.ul
        className={styles.skills__list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
      >
        {getSkills.map((skill, i) => {
          return (
            <motion.li variants={listItemAnimation} key={i}>
              <Skill data={skill} />
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Skills;
