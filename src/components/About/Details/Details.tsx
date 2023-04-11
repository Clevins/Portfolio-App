import { FC, ReactNode } from "react";
import getDetails from "@lib/getDetails";

import stlyes from "./Details.module.css";
import DetailEntry from "./DetailEntry";

const Details: FC = () => {
  const details = getDetails();
  const half = Math.ceil(details.length / 2);

  const detailsCol1 = details.slice(0, half);
  const detailsCol2 = details.slice(half);

  return (
    <>
      <div className={stlyes.experience}>
        <div className={stlyes.experience__years}>
          <p>4</p>
        </div>
        <div className={stlyes.experience__label}>
          Years <span>Experience</span>
        </div>
      </div>

      <hr className={stlyes.divider}></hr>

      <div className={stlyes.details}>
        <ul>
          {detailsCol1.map((detail) => {
            return (
              <DetailEntry
                body={detail.body}
                label={detail.label}
                key={detail.label}
              />
            );
          })}
        </ul>

        <ul>
          {detailsCol2.map((detail) => {
            return (
              <DetailEntry
                body={detail.body}
                label={detail.label}
                key={detail.label}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Details;
