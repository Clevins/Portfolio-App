import { FC } from "react";
import ArrowIcon from "@icons/ArrowIcon.svg";
import styles from "./Timeline.module.css";

const Timeline: FC = () => {
  return (
    <div className={styles.timeline}>
      <h2>Education</h2>
      <div className={styles.line}>
        <div className={styles.circle}>
          <div>dddddd</div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
