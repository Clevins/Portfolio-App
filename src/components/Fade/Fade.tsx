import { FC } from "react";
import { motion } from "framer-motion";
import { FadeDirection, FadeProps } from "@lib/customTypes";

const Fade: FC<FadeProps> = ({ children, direction }) => {
  let initialX = 0;
  let initialY = 0;

  switch (direction) {
    case FadeDirection.DOWN:
      initialY = -50;
      break;
    case FadeDirection.LEFT:
      initialX = 50;
      break;
    case FadeDirection.RIGHT:
      initialX = -50;
      break;
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
