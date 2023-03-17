import { PageUrls } from "./customTypes";

export class Page {
  name: string;
  url: PageUrls;
  currentUrl: string;
  active: boolean;
  Icon: string;

  constructor(name: string, url: PageUrls, currentUrl: string, Icon: string) {
    this.name = name;
    this.url = url;
    this.currentUrl = currentUrl;
    this.active = this.currentUrl === this.url;
    this.Icon = Icon;
  }
}
