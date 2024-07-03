import { FC } from "react";
import { EntryProps } from "@lib/customTypes";
import Button from "@components/Button";

import styles from "./Entry.module.css";

const Entry: FC<EntryProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.entry}>
        {data !== null ? (
          <div className={styles.entry__year}>
            <Button
              isDisabled={true}
            >{`${data.startDate} - ${data.endDate} `}</Button>
          </div>
        ) : (
          <div></div>
        )}
        {/* <div className={styles.entry__circle}></div> */}

        {/* <div className={styles.details}>
          <div className={styles.details__heading}>{data.title}</div>
          <div className={styles.details__subheading}>{data.subTitle}</div>
        </div> */}
      </div>
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
