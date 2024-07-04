import { FC } from "react";
import { EntryProps, Position } from "@lib/customTypes";
import Button from "@components/Button";

import styles from "./Entry.module.css";

const Entry: FC<EntryProps> = ({ data, position }) => {
  console.log(position === Position.LEFT);

  let flexRowDirection =
    position === Position.LEFT
      ? styles["container--left"]
      : styles["container--right"];

  let circleMargin =
    position === Position.LEFT
      ? styles["container__circle--left"]
      : styles["container--right"];

  return (
    <div className={`${styles.container} ${flexRowDirection}`}>
      {data !== null ? (
        <div className={`${styles.container__circle} ${circleMargin}`}></div>
      ) : null}

      {data !== null ? (
        <div className={styles.entry}>
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

{
  /* <div className={styles.container}>
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
      </div> */
}
