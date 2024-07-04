import { FC } from "react";

import styles from "./Profile.module.css";

const Profile: FC = () => {
  return (
    <>
      <div className={styles.header}>
        <h2>Who Am I?</h2>
        <div className={styles.header__underline}></div>
      </div>
      <div className={styles.profile}>
        <p>
          Hi, my name is Cormac Levins. I am a web developer based in Dublin,
          Ireland and I am actively seeking new opportunities. My journey began
          when I enrolled in the BSc in Computing program at Dundalk Institute
          of Technology. Within a few days, I knew this was the career I wanted
          to pursue. Four years later, I graduated with a First Class Honours
          degree and have been dedicated to building my career and enhancing my
          skills ever since.
        </p>

        <p>
          Over the years, I've had the privilege of working with several amazing
          companies in Ireland, the Netherlands, Canada, and the US. I've
          collaborated with brilliant team members worldwide in remote
          environments, focusing on building multimedia web apps. My top skills
          include JavaScript, TypeScript, React.js, Svelte, and Vue.js. I am
          passionate about web development and am always looking for new
          challenges and opportunities to grow.
        </p>
      </div>
    </>
  );
};

export default Profile;
