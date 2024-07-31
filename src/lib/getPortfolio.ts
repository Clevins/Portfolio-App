import CPortfolio from "./Classes/Portfolio";

import portfolioImg from "../assets/img/portfolio.png";
import triviaImg from "../assets/img/trivia.png";
import createComponentImg from "../assets/img/createcomponent.png";

export const getPortfolio = () => {
  return [
    new CPortfolio(
      "Portfolio",
      "  https://github.com/Clevins/Portfolio-App",
      portfolioImg
    ),
    // new CPortfolio(
    //   "Trivia Game",
    //   "https://github.com/Clevins/Trivia-App",
    //   triviaImg
    // ),
    new CPortfolio(
      "Create Component",
      "https://www.npmjs.com/package/create-component-ts",
      createComponentImg
    ),
  ];
};
