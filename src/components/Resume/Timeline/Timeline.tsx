import { FC } from "react";
import Entry from "../Entry";
import { TimelineProps } from "@lib/customTypes";

import styles from "./Timeline.module.css";

const Timeline: FC<TimelineProps> = ({ data }) => {
  return (
    <div className={styles.timeline}>
      <h2 className={styles.timeline__title}>{data.title}</h2>
      <div className={styles.entries}>
        {data.entries.map((entry, i) => {
          return <Entry data={entry} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Timeline;
