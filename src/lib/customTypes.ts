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

export enum Position {
  LEFT,
  RIGHT,
}

export type EntryProps = {
  data: CEntry | null;
  position: Position;
};

export type FadeProps = {
  children: ReactNode;
  direction: FadeDirection;
};
