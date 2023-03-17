export default class Skill {
  name: string;
  altText: string;
  icon: string;

  constructor(name: string, altText: string, icon: string) {
    this.name = name;
    this.altText = altText;
    this.icon = icon;
  }
}
