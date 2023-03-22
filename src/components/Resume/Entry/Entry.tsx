import Button from "@components/Button";
import { FC, MouseEvent } from "react";
import styles from "./Entry.module.css";

const Entry: FC = () => {
  return (
    <div>
      <div className={styles.line} />
      <div className={styles.container}>
        <div className={styles.entry}>
          <div className={styles.entry__circle}></div>
          <div className={styles.entry__year}>
            <Button label={"2011 - 2016"} />
          </div>
          <div className={styles.details}>
            <div className={styles.details__heading}>St. Joesph's CBS</div>
            <div className={styles.details__subheading}>Bsc In Computing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
