import { FC } from "react";
import { Outlet } from "react-router-dom";
import { getPages } from "@lib/getPages";
import PageLink from "@components/PageLink";

import stlyes from "./Layout.module.css";

const Layout: FC = () => {
  const pathname = window.location.pathname;
  const pages = getPages(pathname);

  console.log(pages);

  return (
    <>
      <div className={stlyes.navbar}>
        <div className={stlyes.pages}>
          {pages.map((page) => {
            return <PageLink key={page.name} page={page} />;
          })}
        </div>
      </div>

      <main>{<Outlet />}</main>
      {/* <Navbar socialLinks={socials} logo={logo} />
      
      <Footer socialLinks={socials} /> */}
    </>
  );
};

export default Layout;
