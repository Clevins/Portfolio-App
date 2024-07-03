import { FC } from "react";
import Entry from "../Entry";
import { TimelineProps } from "@lib/customTypes";

import styles from "./Timeline.module.css";
import Button from "@components/Button";

const Timeline: FC<TimelineProps> = ({ data }) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.entries}>
        {data.entries.map((entry, i) => {
          console.log(data);

          return <Entry data={entry} key={i} />;
        })}
      </div>

      {/* <div className={styles.container}>
        <div className={styles.container__circle}></div>
        <div className={styles.entry}>
          <div className={styles.entry__year}>
            <Button isDisabled={true}>{`2016 - 2020 `}</Button>
          </div>
          <div className={styles.details}>
            <div className={styles.details__heading}>St. Joesphas School</div>
            <div className={styles.details__subheading}>Secondary School</div>
            <div className={styles.details__subheading}>
              Received my leaving Cert Certificate{" "}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Timeline;
