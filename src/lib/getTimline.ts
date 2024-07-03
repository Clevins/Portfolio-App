import CEntry from "./Classes/Entry";
import CTimeline from "./Classes/Timeline";

export const getTimeline = () => {
  return new CTimeline([
    // new CEntry("", "", "", "", ""),
    new CEntry(
      "St.Joseph's School",
      "Secondary School",
      "Received my leaving Cert Certificate",
      "2011",
      "2016"
    ),
    new CEntry(
      "Dundalk Institute of Technology",
      "Bsc In Computing",
      "Graduated in 2020 with a First Class Honours (1.1) Bachelor's Degree in Computer Science. As part of this course, I studied a wide variety of topics relating to Computer Science including web development, OOP, AI, and database technologies.",
      "2016",
      "2020"
    ),
    // new CEntry("", "", "", "", ""),
    // new CEntry("", "", "", "", ""),

    new CEntry(
      "Inkerman",
      "Junior Frontend Developer",
      "Inkerman Technologies offers tech solutions for small to medium businesses, including websites, CMS, and eCommerce. I edited and maintained PHP, MySQL, and React platforms, and developed and tested new UI features. Success depended on effective client communication from start to finish.",
      "2019",
      "2019"
    ),

    new CEntry(
      "Axonista",
      "Front End Developer",
      "Axonista powers video commerce for brands like Qurate, Waterbear, and Virgin Media. Key achievements include launching WaterBear in 194 countries and the QVC/HSN app on Xfinity. Worked remotely using Jira and Slack, collaborating globally in an agile environment.",
      "2020",
      "2023"
    ),
    // new CEntry("", "", "", "", ""),
    // new CEntry("", "", "", "", ""),

    new CEntry(
      "VSMedia",
      "JS Developer",
      "My responsibilities included maintaining and developing JavaScript codebase and libraries for 15 domains. Collaborated with UI/UX teams to create chatroom features using JS and WebSockets, allowing voice navigation. Developed a ClickUp workflow to improve project tracking and reduce delays.",
      "2023",
      "2023"
    ),
  ]);
};
