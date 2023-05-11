import { FC } from "react";

import { getPortfolio } from "@lib/getPortfolio";
import styles from "./Portfolio.module.css";
import Project from "./Project";

const Portfolio: FC = () => {
  const portfolio = getPortfolio();

  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__header}>Portfolio</div>

      <div className={styles.portfolio__projects}>
        {portfolio.map((project) => {
          return <Project project={project} key={project.name} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
