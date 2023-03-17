import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import HomeIcon from "@icons/HomeIcon.svg";
import { Link } from "react-router-dom";

import stlyes from "./PageLink.module.css";
import { Page } from "@lib/Page";

type PageLinkProps = {
  page: Page;
};

const PageLink: FC<PageLinkProps> = ({ page }) => {
  const { name, url, Icon } = page;
  return (
    <Link to={url}>
      <div className={stlyes.link}>
        <div className={stlyes.link__icon}>
          <Icon />
        </div>
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default PageLink;
