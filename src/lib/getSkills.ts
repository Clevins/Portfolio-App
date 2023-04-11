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

export default getSkills;
