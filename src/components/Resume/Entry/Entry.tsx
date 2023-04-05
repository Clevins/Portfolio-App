import Button from "@components/Button";
import CEntry from "@lib/Classes/Entry";
import { FC, MouseEvent } from "react";
import styles from "./Entry.module.css";

type EntryProps = {
  data: CEntry;
};

const Entry: FC<EntryProps> = ({ data }) => {
  return (
    <div>
      <div className={styles.line} />
      <div className={styles.container}>
        <div className={styles.entry}>
          <div className={styles.entry__circle}></div>
          <div className={styles.entry__year}>
            <Button label={`${data.startDate} - ${data.endDate} `} />
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
