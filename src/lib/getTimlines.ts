import CEntry from "./Classes/Entry";
import CTimeline from "./Classes/Timeline";

export const getTimelines = () => {
  return [
    new CTimeline("Education", [
      new CEntry("St. Joesphas School", "High School ", "2011", "2016"),
      new CEntry("DKIT", "Bsc In Computing", "2016", "2020"),
    ]),
    new CTimeline("Work History", [
      new CEntry("Axonista", "Web Developer", "2020", "2023"),
      new CEntry("Inkerman", "Web Developer", "2019", "2019"),
    ]),
  ];
};
