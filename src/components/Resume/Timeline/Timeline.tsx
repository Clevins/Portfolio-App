import { FC } from "react";
import Entry from "../Entry";
import { Position, TimelineProps } from "@lib/customTypes";

import styles from "./Timeline.module.css";
import Button from "@components/Button";

const Timeline: FC<TimelineProps> = ({ data }) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.entries}>
        {data.entries.map((entry, i) => {
          return (
            <Entry
              data={entry}
              key={i}
              position={i % 2 === 0 ? Position.LEFT : Position.RIGHT}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
