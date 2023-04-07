import { FC } from "react";
import ProfileImg from "@assets/profile2.jfif";
import stlyes from "./Details.module.css";

import React from "react";
import { Fade } from "react-reveal";

const Details: FC = () => {
  return (
    <div className={stlyes.details}>
      <Fade top>
        <div className={stlyes.header}>
          {/* <div className={stlyes.header__img}>
          <img src={ProfileImg}></img>
        </div> */}
          <div className={stlyes.yoe}>
            <div className={stlyes.yoe__num}>
              <p>4</p>
            </div>
            <div className={stlyes.yoe__ex}>
              Years <span>Experience</span>
            </div>
          </div>
        </div>
      </Fade>

      <hr className="my-10"></hr>
      <Fade bottom>
        <div className={stlyes.info}>
          {/* <li>
          <span>Birthday: </span>
          <span>11.06.1998</span>
        </li>
        <li>
          <span>Nationality: </span>
          <span>Irish</span>
        </li>
        <li>
          <span>Address: </span>
          <span>Vancouver, BC, Canada</span>
        </li>
        <li>
          <span>Degree: </span>
          <span>BSc In Computing</span>
        </li>
        <li>
          <span>Email: </span>
          <span>cormaclevins@outlook.ie</span>
        </li>
        <li>
          <span>Study: </span>
          <span>Dundalk IT</span>
        </li>
        <li>
          <span>Phone: </span>
          <span>(+353) 86 209 8913</span>
        </li>

        <li>
          <span>Interest: </span>
          <span>Reading, Cooking</span>
        </li> */}
          <ul>
            <li>
              <span>Birthday: </span>
              <span>11.06.1998</span>
            </li>

            {/* <li>
            <span>Address: </span>
            <span>Vancouver, BC, Canada</span>
          </li> */}
            <li>
              <span>Email: </span> <span>cormaclevins@outlook.ie</span>
            </li>
            <li>
              <span>Phone: </span>
              <span>(+353) 86 209 8913</span>
            </li>
          </ul>

          <ul>
            <li>
              <span>Nationality: </span> <span>Irish</span>
            </li>
            {/* <li>
            <span>Study: </span> <span>Dundalk IT</span>
          </li> */}
            <li>
              <span>Degree: </span> <span>BSc In Computing</span>
            </li>
            <li>
              <span>Interest: </span> <span>Reading, Cooking</span>
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default Details;
