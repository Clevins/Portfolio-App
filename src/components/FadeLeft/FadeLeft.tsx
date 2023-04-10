import { FC, ReactNode } from "react";
// import ArrowIcon from "@icons/ArrowIcon.svg";
// import getSkills from "@lib/getSkills";
// import styles from "./Skills.module.css";

export type FadeRightProps = {
  children: ReactNode;
};

import React from "react";
import { motion } from "framer-motion";
// import { Fade } from "react-reveal";

const FadeLeft: FC<FadeRightProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.25 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeLeft;
