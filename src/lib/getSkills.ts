import Skill from "./Classes/Skill";

import HtmlIcon from "@assets/icons/tech/html5.svg";
import CssIcon from "@assets/icons/tech/css.svg";
import TsIcon from "@assets/icons/tech/ts.svg";
import ReactIcon from "@assets/icons/tech/react.svg";
import NextJsIcon from "@assets/icons/tech/nextjs.svg";

import SvelteIcon from "@assets/icons/tech/svelte.svg";
import VueIcon from "@assets/icons/tech/vue.svg";
import JestIcon from "@assets/icons/tech/jest.svg";
import TailwindIcon from "@assets/icons/tech/tailwind.svg";
import NodeIcon from "@assets/icons/tech/node.svg";

// const htmlIconUrl = "./src/assets/icons/tech/html5.svg";
// const VueIconUrl = "./src/assets/icons/tech/css.svg";
// const tsIconUrl = "./src/assets/icons/tech/ts.svg";
// const reactIconUrl = "./src/assets/icons/tech/react.svg";
// const nextjsIconUrl = "./src/assets/icons/tech/nextjs.svg";

// const svelteIconUrl = "./src/assets/icons/tech/svelte.svg";
// const vueIconUrl = "./src/assets/icons/tech/vue.svg";
// const jestIconUrl = "./src/assets/icons/tech/jest.svg";
// const tailwindIconUrl = "./src/assets/icons/tech/tailwind.svg";
// const nodeIconUrl = "./src/assets/icons/tech/node.svg";

const getSkills = [
  new Skill("HTML 5", "HTML 5", HtmlIcon),
  new Skill("CSS3", "CSS3", CssIcon),
  new Skill("TypeScript", "TypeScript", TsIcon),
  new Skill("ReactJS", "ReactJS", ReactIcon),
  new Skill("NextJS", "NextJS", NextJsIcon),

  new Skill("Svelte", "Svelte", SvelteIcon),
  new Skill("Vue JS", "Vue JS", VueIcon),
  new Skill("Jest", "Jest", JestIcon),
  new Skill("Tailwind", "Tailwind", TailwindIcon),
  new Skill("Node", "Node", NodeIcon),
];

console.log(getSkills);

export default getSkills;
