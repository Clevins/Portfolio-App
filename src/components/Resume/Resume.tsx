import { FC } from "react";
import { getTimelines } from "@lib/getTimlines";
import { FadeDirection } from "@lib/customTypes";

import Fade from "@components/Fade";
import Button from "@components/Button";
import Timeline from "./Timeline";

import DownloadIcon from "@icons/DownloadIcon.svg";
import ResumePDF from "@assets/CormacLevinsResume.pdf";
import styles from "./Resume.module.css";

const Resume: FC = () => {
  const timelines = getTimelines();

  return (
    <div className={styles.resume}>
      <div className={styles.header}>
        <Fade direction={FadeDirection.LEFT}>
          <h2>Resume</h2>
        </Fade>

        <Fade direction={FadeDirection.RIGHT}>
          <div className={styles.header__underline}></div>
        </Fade>
      </div>
      <div className={styles.timelines}>
        {timelines.map((timeline, i) => {
          return (
            <Fade direction={FadeDirection.LEFT} key={i}>
              <Timeline data={timeline} />
            </Fade>
          );
        })}
      </div>

      <div className={styles.cv}>
        <Fade direction={FadeDirection.DOWN}>
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
