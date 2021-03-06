// * Import styles
import homeStyles from "./Home.module.css";

// * Redefine expoert vards
const container = homeStyles.container;
const main = homeStyles.main;
const title = homeStyles.title;
const description = homeStyles.description;
const rightDiv = homeStyles.rightDiv;
const leftDiv = homeStyles.leftDiv;
const gridContainer = homeStyles.gridContainer;
const subgraphCard = homeStyles.subgraphCard;
const code = homeStyles.code;

// * EXPORT!!
export {
  container,
  main,
  title,
  description,
  rightDiv,
  leftDiv,
  gridContainer,
  subgraphCard,
  code,
};

// * Subfolder exports
export * from "./components";
