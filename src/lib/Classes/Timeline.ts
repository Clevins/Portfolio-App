import CEntry from "./Entry";

export default class CTimeline {
  title: string;
  entries: CEntry[];

  constructor(title: string, entries: CEntry[]) {
    this.title = title;
    this.entries = entries;
  }
}
