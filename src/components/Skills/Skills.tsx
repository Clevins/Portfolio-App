import { FC } from "react";
import ArrowIcon from "@icons/ArrowIcon.svg";
import getSkills from "@lib/getSkills";
import Skill from "./Skill";
import styles from "./Skills.module.css";

const Skills: FC = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills__header}>Skills</div>
      <div className={styles.skills__list}>
        {getSkills.map((skill) => {
          return <Skill data={skill} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
