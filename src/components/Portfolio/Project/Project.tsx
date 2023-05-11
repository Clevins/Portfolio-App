import CPortfolio from "@lib/Classes/Portfolio";
import { FC } from "react";

import styles from "./Project.module.css";

type ProjectProps = {
  project: CPortfolio;
};

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div className={styles.project}>
      <a
        className={`group ${styles.project__link}`}
        href={project.link}
        target="_blank"
      >
        <img className={styles.project__img} src={project.image} />
        <div
          className={`group-hover:bg-black group-hover:bg-opacity-80   ${styles.project__bg}`}
        >
          <div
            className={`group-hover:visible group-hover:translate-y-0 ${styles.project__overlay}`}
          >
            <div className={styles.project__name}>{project.name}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;
