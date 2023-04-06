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
        <Fade left>
          <h2>Resume</h2>
        </Fade>

        <Fade right>
          <div className={styles.header__underline}></div>
        </Fade>
      </div>
      <div className={styles.timelines}>
        {timelines.map((timeline) => {
          return <Timeline data={timeline} />;
        })}
      </div>

      <div className={styles.cv}>
        <Fade right>
          {/* <Button label={"Download CV"} useLg={true} link/> */}
          {/* <button href="/test.xlsx">Download</button> */}
          <a href="/test.xlsx" download>
            <button> click </button>
          </a>
        </Fade>
      </div>
    </div>
  );
};

export default Resume;
