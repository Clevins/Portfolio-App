import { FC } from "react";
import { SkillProps } from "@lib/customTypes";

import styles from "./Skill.module.css";

const Skill: FC<SkillProps> = ({ data }) => {
  const Icon = data.icon;
  return (
    <div className={styles.skill}>
      <div className={styles.skill__img}>
        <Icon />
      </div>
      <div className={styles.skill__name}>{data.name}</div>
    </div>
  );
};

export default Skill;
