/// <reference types="vite/client" />
declare module "*.css";
declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare module "react-reveal";
declare module "react-reveal/globals";
