import {
  handleAave,
  handleCompound,
  handleCream,
  handleMaker,
} from "./handlers";

// * Handles various subgraphs
const dispatch = async (subgraph) => {
  let data = null;
  switch (subgraph) {
    case "compound":
      data = await handleCompound();
      break;
    case "maker":
      data = await handleMaker();
      break;
    case "aave":
      data = await handleAave();
      break;
    case "cream":
      data = await handleCream();
      break;
    default:
      break;
  }

  // * Any case, return data
  return data;
};

export default dispatch;
