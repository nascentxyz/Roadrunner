import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { grid, card, searchBar } from "../styles/components";

const apis = ["Compound", "Maker", "Aave", "Cream"];

const QueryList = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className={grid}>
      <div className={searchBar}>
        <TextField
          id="outlined-search"
          onChange={(input) => setFilter(input.target.value)}
          label="Compound, Aave..."
          type="search"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: "MuiFormLabel-root",
              focused: "MuiFormLabel-root",
            },
          }}
          InputProps={{
            classes: {
              root: "MuiFormLabel-root",
              focused: "MuiFormLabel-root",
              notchedOutline: "MuiFormLabel-root",
            },
          }}
        />
      </div>
      {apis
        .filter((str) => str.toLowerCase().includes(filter))
        .map((api) => (
          <a key={api} href={`/subgraph/${api.toLowerCase()}`} className={card}>
            <h3>{api}</h3>
            <p>{api} markets data.</p>
          </a>
        ))}
    </div>
  );
};

export default QueryList;
