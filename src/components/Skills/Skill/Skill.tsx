import { FC } from "react";
import ArrowIcon from "@icons/ArrowIcon.svg";
import getSkills from "@lib/getSkills";
import styles from "./Skill.module.css";
import { default as SkillType } from "@lib/Skill";

type SkillProps = {
  data: SkillType;
};

const Skill: FC<SkillProps> = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.skill}>
      <div className={styles.skill__img}>
        <img src={data.icon} alt={data.altText}></img>
      </div>
      <div className={styles.skill__name}>{data.name}</div>
    </div>
  );
};

export default Skill;
