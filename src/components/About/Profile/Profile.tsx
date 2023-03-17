import React, { FC } from "react";
import styles from "./Profile.module.css";

const Profile: FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <h2>Who Am I?</h2>
        <div className={styles.header__underline}></div>
      </div>
      <div className={styles.profile__body}>
        <p>
          Hi, my name is Adriano Smith and I began using WordPress when it first
          began. I’ve spent most of my waking hours for the last ten years
          designing, programming and operating WordPress sites.
        </p>
        <p>
          One of my specialties is taking an idea from scratch and creating a
          full-fledged platform.
        </p>
        <p>
          I go beyond to produce sites with a unique, outstanding, contemporary
          look-and-feel. With extensive knowledge of web mechanics, I’m able to
          optimize complex integrations to require little-to-no maintenance
          while running on their own for years.
        </p>
      </div>
    </div>
  );
};

export default Profile;
