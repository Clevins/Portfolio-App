import { FC } from "react";
import { EntryProps } from "@lib/customTypes";
import Button from "@components/Button";

import styles from "./Entry.module.css";

const Entry: FC<EntryProps> = ({ data }) => {
  return (
    <div>
      <div className={styles.line} />
      <div className={styles.container}>
        <div className={styles.entry}>
          <div className={styles.entry__circle}></div>
          <div className={styles.entry__year}>
            <Button
              isDisabled={true}
            >{`${data.startDate} - ${data.endDate} `}</Button>
          </div>
          <div className={styles.details}>
            <div className={styles.details__heading}>{data.title}</div>
            <div className={styles.details__subheading}>{data.subTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
