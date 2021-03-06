// * Import styles
import homeStyles from "./Home.module.css";

// * Redefine expoert vards
const container = homeStyles.container;
const main = homeStyles.main;
const title = homeStyles.title;
const description = homeStyles.description;

// * EXPORT!!
export {
    container,
    main,
    title,
    description
}

// * Subfolder exports
export * from "./components";