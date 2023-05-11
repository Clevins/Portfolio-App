import { FC } from "react";

import { getPortfolio } from "@lib/getPortfolio";
import Project from "./Project";

import styles from "./Portfolio.module.css";
import { motion } from "framer-motion";

const listItemAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Portfolio: FC = () => {
  const portfolio = getPortfolio();

  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__header}>Portfolio</div>

      {/* <div className={styles.portfolio__projects}> */}

      <motion.ul
        className={styles.portfolio__projects}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delayChildren: 0.5, staggerChildren: 0.5 }}
      >
        {portfolio.map((project) => {
          return (
            <motion.li variants={listItemAnimation} key={project.name}>
              <Project project={project} />;
            </motion.li>
          );
        })}
      </motion.ul>

      {/* {portfolio.map((project) => {
          return <Project project={project} key={project.name} />;
        })} */}
      {/* </div> */}
    </div>
  );
};

export default Portfolio;
