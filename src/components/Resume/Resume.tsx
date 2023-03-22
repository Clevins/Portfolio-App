import { FC } from "react";
import styles from "./Resume.module.css";
import Timeline from "./Timeline";

const Resume: FC = () => {
  return (
    <div className={styles.resume}>
      <div className={styles.header}>
        <h2>Resume</h2>
        <div className={styles.header__underline}></div>
      </div>
      <div className={styles.timelines}>
        <Timeline />

        <Timeline />
      </div>
    </div>
  );
};

export default Resume;
