import Button from "@components/Button";
import { getTimelines } from "@lib/getTimlines";
import { FC } from "react";
import styles from "./Resume.module.css";
import Timeline from "./Timeline";
import DownloadIcon from "@icons/DownloadIcon.svg";

import React from "react";
// import { Fade } from "react-reveal";

import ResumePDF from "@assets/CormacLevinsResume.pdf";
import FadeRight from "@components/FadeRight/FadeRight";
import FadeLeft from "@components/FadeLeft/FadeLeft";

const Resume: FC = () => {
  const timelines = getTimelines();

  console.log(timelines);

  return (
    <div className={styles.resume}>
      <div className={styles.header}>
        <FadeRight>
          <h2>Resume</h2>
        </FadeRight>

        {/* <Fade right ssrFadeout> */}
        <FadeLeft>
          <div className={styles.header__underline}></div>
        </FadeLeft>
        {/* </Fade> */}
      </div>
      <div className={styles.timelines}>
        {timelines.map((timeline) => {
          return (
            // <Fade right ssrFadeout>
            <FadeRight>
              <Timeline data={timeline} />
            </FadeRight>

            // </Fade>
          );
        })}
      </div>

      <div className={styles.cv}>
        {/* <Fade right ssrFadeout> */}
        <a href={ResumePDF} download className={styles.cv__link}>
          <Button useLg={true}>
            Download CV <DownloadIcon />
          </Button>
        </a>
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default Resume;
