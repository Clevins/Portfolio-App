export default class CEntry {
  title: string;
  subTitle: string;
  description: string;
  startDate: string;
  endDate: string;

  constructor(
    title: string,
    subTitle: string,
    description: string,
    startDate: string,
    endDate: string
  ) {
    this.title = title;
    this.subTitle = subTitle;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
