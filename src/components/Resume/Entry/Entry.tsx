import { FC } from "react";
import { EntryProps, Position } from "@lib/customTypes";
import Button from "@components/Button";

import styles from "./Entry.module.css";

const Entry: FC<EntryProps> = ({ data, position }) => {
  let flexRowDirection =
    position === Position.LEFT
      ? styles["container--left"]
      : styles["container--right"];

  let circleMargin =
    position === Position.LEFT
      ? styles["container__circle--left"]
      : styles["container--right"];

  let entryAlignment =
    position === Position.LEFT ? styles["entry--left"] : styles["entry--right"];

  return (
    <div className={`${styles.container} ${flexRowDirection}`}>
      {data !== null ? (
        <div className={`${styles.container__circle} ${circleMargin}`}></div>
      ) : null}

      {data !== null ? (
        <div className={`${styles.entry} ${entryAlignment}`}>
          <>
            <div className={styles.entry__year}>
              <Button
                isDisabled={true}
              >{`${data.startDate} - ${data.endDate} `}</Button>
            </div>
            <div className={styles.details}>
              <div className={styles.details__heading}>{data.title}</div>
              <div className={styles.details__subheading}>{data.subTitle}</div>
              <div className={styles.details__desription}>
                {data.description}
              </div>
            </div>
          </>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Entry;
