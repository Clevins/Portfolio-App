import Button from "@components/Button";
import { getTimelines } from "@lib/getTimlines";
import { FC } from "react";
import styles from "./Resume.module.css";
import Timeline from "./Timeline";
import DownloadIcon from "@icons/DownloadIcon.svg";

import React from "react";
import { Fade } from "react-reveal";

import ResumePDF from "@assets/CormacLevinsResume.pdf";

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
          <a href={ResumePDF} download className={styles.cv__link}>
            <Button useLg={true}>
              Download CV <DownloadIcon />
            </Button>
          </a>
        </Fade>
      </div>
    </div>
  );
};

export default Resume;
