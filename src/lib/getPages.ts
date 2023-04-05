import { Page } from "./Classes/Page";
import { PageUrls } from "@lib/customTypes";

import HomeIcon from "@icons/HomeIcon.svg";
import ContactIcon from "@icons/ContactIcon.svg";

export const getPages = (currentUrl: string) => {
  return [
    new Page("Home", PageUrls.Home, currentUrl, HomeIcon),
    new Page("About Me", PageUrls.About, currentUrl, HomeIcon),
    new Page("Contact", PageUrls.Contact, currentUrl, ContactIcon),
    new Page("Portfolio", PageUrls.Portfolio, currentUrl, HomeIcon),
  ];
};
