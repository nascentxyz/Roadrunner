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

// * EXPORT!!
export {
  container,
  main,
  title,
  description,
  rightDiv,
  leftDiv,
  gridContainer,
};

// * Subfolder exports
export * from "./components";
