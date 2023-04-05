import Button from "@components/Button";
import { getTimelines } from "@lib/getTimlines";
import { FC } from "react";
import styles from "./Resume.module.css";
import Timeline from "./Timeline";

import React from "react";
import Fade from "react-reveal/Fade";

const Resume: FC = () => {
  const timelines = getTimelines();

  console.log(timelines);

  return (
    <div className={styles.resume}>
      <div className={styles.header}>
        <h2>Resume</h2>
        <div className={styles.header__underline}></div>
      </div>
      <div className={styles.timelines}>
        {timelines.map((timeline) => {
          return <Timeline data={timeline} />;
        })}
      </div>

      <div className={styles.cv}>
        <Button label={"Download CV"} />
      </div>
    </div>
  );
};

export default Resume;
