export enum PageUrls {
  Home = "/home",
  About = "/about",
  Contact = "/contact",
  Portfolio = "/portfolio",
}

export type ButtonProps = {
  label: string;
  useLg?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
