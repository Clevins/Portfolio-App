import { FC } from "react";

import React from "react";
// import { Fade } from "react-reveal";

import PhoneIcon from "@icons/contact/PhoneIcon.svg";
import HomeIcon from "@icons/contact/HomeIcon.svg";
import EmailIcon from "@icons/contact/EmailIcon.svg";

import LinkedInIcon from "@icons/contact/linkedin-svgrepo-com.svg";
import InstagramIcon from "@icons/contact/InstagramIcon2.svg";
import GithubIcon from "@icons/contact/GithubIcon.svg";

import styles from "./Contact.module.css";

const Contact: FC = () => {
  return (
    <div className={styles.contactMe}>
      <div className={styles.contactMe__container}>
        {/* <Fade left ssrFadeout> */}
        <div className={styles.contact__header}>Contact Me</div>
        {/* </Fade> */}
        {/* <Fade right ssrFadeout> */}
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <PhoneIcon />
            <p>(+1) 236-867-1166</p>
          </div>
          <div className={styles.contact}>
            <EmailIcon />
            <p>cormaclevins@outlook.ie</p>
          </div>
          <div className={styles.contact}>
            <HomeIcon />
            <p>Vancouver, BC</p>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Fade left ssrFadeout> */}
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/cormac-levins-a152a8109/"
            target="_blank"
            aria-label="Link to My LinkedIn Page"
          >
            {/* <button> */}
            <LinkedInIcon />
            {/* </button> */}
          </a>

          <a
            href="https://www.instagram.com/cormaclevins98/"
            target="_blank"
            aria-label="Link to My Instagram Page"
          >
            <InstagramIcon />
          </a>

          <a
            href="https://github.com/Clevins"
            target="_blank"
            aria-label="Link to My Github Page"
          >
            <GithubIcon />
          </a>
        </div>
        {/* </Fade> */}
        {/* <Fade right ssrFadeout> */}
        <div className={styles.footer}>
          Designed and Built by{" "}
          <a
            href="https://www.linkedin.com/in/cormac-levins-a152a8109/"
            target="_blank"
          >
            <span>Cormac Levins</span>
          </a>
        </div>
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default Contact;
