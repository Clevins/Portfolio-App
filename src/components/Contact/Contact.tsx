import { FC } from "react";

import PhoneIcon from "@icons/contact/PhoneIcon.svg";
import HomeIcon from "@icons/contact/HomeIcon.svg";
import EmailIcon from "@icons/contact/EmailIcon.svg";

import LinkedInIcon from "@icons/contact/linkedin-svgrepo-com.svg";
import InstagramIcon from "@icons/contact/InstagramIcon2.svg";
import GithubIcon from "@icons/contact/GithubIcon.svg";

import styles from "./Contact.module.css";
import Fade from "@components/Fade";
import { FadeDirection } from "@lib/customTypes";

const Contact: FC = () => {
  return (
    <Fade direction={FadeDirection.DOWN}>
      <div className={styles.contactMe}>
        <div className={styles.contactMe__container}>
          <div className={styles.contact__header}>Contact Me</div>

          <div className={styles.contacts}>
            <div className={styles.contact}>
              <PhoneIcon />
              <p>086 209 8913</p>
            </div>
            <div className={styles.contact}>
              <EmailIcon />
              <p>cormaclevins@outlook.ie</p>
            </div>
            <div className={styles.contact}>
              <HomeIcon />
              <p>Dublin, Ireland</p>
            </div>
          </div>

          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/cormac-levins-a152a8109/"
              target="_blank"
              aria-label="Link to My LinkedIn Page"
            >
              <LinkedInIcon />
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

          <div className={styles.footer}>
            Designed and Built by{" "}
            <a
              href="https://www.linkedin.com/in/cormac-levins/"
              target="_blank"
            >
              <span>Cormac Levins</span>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Contact;
