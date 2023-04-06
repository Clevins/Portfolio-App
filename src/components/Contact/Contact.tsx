import { FC } from "react";

import React from "react";
import Fade from "react-reveal/Fade";

import PhoneIcon from "@icons/contact/PhoneIcon.svg";
import HomeIcon from "@icons/contact/HomeIcon.svg";
import EmailIcon from "@icons/contact/EmailIcon.svg";

import LinkedInIcon from "@icons/contact/linkedin-svgrepo-com.svg";
import FacebookIcon from "@icons/contact/FacebookIcon.svg";
import GithubIcon from "@icons/contact/GithubIcon.svg";

import styles from "./Contact.module.css";

const Contact: FC = () => {
  return (
    <div className={styles.contactMe}>
      <div className={styles.contactMe__container}>
        <Fade left>
          <div className={styles.contact__header}>Contact Me</div>
        </Fade>
        <Fade right>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <PhoneIcon />
              <p>(+353) 86 209 8913</p>
            </div>
            <div className={styles.contact}>
              <EmailIcon />
              <p>cormaclevins@outlook.ie</p>
            </div>
            <div className={styles.contact}>
              <HomeIcon />
              <p>Downtown, Vancouver, BC</p>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className={styles.socials}>
            <button>
              <LinkedInIcon />
            </button>
            <button>
              <FacebookIcon />
            </button>
            <button>
              <GithubIcon />
            </button>
          </div>
        </Fade>
        <Fade right>
          <div className={styles.footer}>
            Designed and Built by Cormac Levins
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
