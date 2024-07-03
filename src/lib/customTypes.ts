import { ReactNode } from "react";
import { default as SkillType } from "@lib/Classes/Skill";
import CTimeline from "./Classes/Timeline";
import CEntry from "./Classes/Entry";

export enum FadeDirection {
  LEFT = "left",
  RIGHT = "right",
  DOWN = "down",
}

export type Detail = {
  label: string;
  body: string;
};

export type ButtonProps = {
  useLg?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type SkillProps = {
  data: SkillType;
};

export type TimelineProps = {
  data: CTimeline;
};

export type EntryProps = {
  data: CEntry | null;
};

export type FadeProps = {
  children: ReactNode;
  direction: FadeDirection;
};
