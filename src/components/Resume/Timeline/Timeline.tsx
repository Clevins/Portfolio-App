import { FC } from "react";
import ArrowIcon from "@icons/ArrowIcon.svg";
import styles from "./Timeline.module.css";
import Entry from "../Entry";

const Timeline: FC = () => {
  return (
    <div className={styles.timeline}>
      <h2>Education</h2>
      <div className={styles.entries}>
        <Entry />
        <Entry />
        <Entry />
      </div>
    </div>
  );
};

export default Timeline;
