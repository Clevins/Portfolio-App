export default class CEntry {
  title: string;
  subTitle: string;
  startDate: string;
  endDate: string;

  constructor(
    title: string,
    subTitle: string,
    startDate: string,
    endDate: string
  ) {
    this.title = title;
    this.subTitle = subTitle;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
