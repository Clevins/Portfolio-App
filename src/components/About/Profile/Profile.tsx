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
          Hi, my name is Cormac Levins, I am a web developer and I've recently
          relocated to Vancouver and am looking for a new opportunity. I started
          my journey when I enrolled in Bsc. In Computing at Dundalk Institute
          for Technology. After a few days, I knew this is what I wanted to do
          as a career and I have been working at it ever since. Over the last
          three years, I have worked with several companies in Ireland, the
          Netherlands, and the US. And have worked with team members across the
          globe in a remote enviroment building multimedia web apps.
        </p>

        <p>
          I believe every small detail matters. I prioritize the quality of my
          code over most other things, It's rarely perfect but I am always
          making a conscious effort to improve it consistently as the project
          goes on. I feel that writing clean and fully maintainable code is the
          most important factor in reducing and eliminating technical dept and
          have made this a primary focus in recent projects.
        </p>
      </div>
    </>
  );
};

export default Profile;
