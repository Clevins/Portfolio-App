import { ReactElement, ReactNode } from "react";

export enum PageUrls {
  Home = "/home",
  About = "/about",
  Contact = "/contact",
  Portfolio = "/portfolio",
}

export type ButtonProps = {
  useLg?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
