import { FC } from "react";
import ArrowIcon from "@icons/ArrowIcon.svg";
import styles from "./Timeline.module.css";
import Entry from "../Entry";
import CTimeline from "@lib/Classes/Timeline";

import React from "react";
import { Fade } from "react-reveal";

type TimelineProps = {
  data: CTimeline;
};

const Timeline: FC<TimelineProps> = ({ data }) => {
  return (
    <Fade bottom>
      <div className={styles.timeline}>
        <h2 className={styles.timeline__title}>{data.title}</h2>
        <div className={styles.entries}>
          {data.entries.map((entry) => {
            return <Entry data={entry} />;
          })}
        </div>
      </div>
    </Fade>
  );
};

export default Timeline;
