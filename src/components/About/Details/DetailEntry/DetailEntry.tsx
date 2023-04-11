import { Detail } from "@lib/customTypes";
import { FC } from "react";

const DetailEntry: FC<Detail> = ({ body, label }) => {
  return (
    <li>
      <span>{label}: </span>
      <span>{body}</span>
    </li>
  );
};

export default DetailEntry;
