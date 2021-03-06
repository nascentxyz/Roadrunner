import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { grid, card, searchBar } from "../styles/components";
import useDarkMode from "use-dark-mode";

const apis = ["Compound", "Maker", "Aave", "Cream"];

const QueryList = () => {
  const [filter, setFilter] = useState("");

  const { value } = useDarkMode(false);
  const [, ...result]: any = Array(11).keys();
  return (
    <div className={grid}>
      <div className={searchBar}>
        <TextField
          id="outlined-search"
          onChange={(input) => setFilter(input.target.value)}
          label="Compound, Aave..."
          type="search"
          variant="outlined"
          color={value ? "primary" : "secondary"}
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
        .filter((str) => str.includes(filter))
        .map((api) => (
          <a href={`/api/${api.toLowerCase()}`} className={card}>
            <h3>{api}</h3>
            <p>{api} markets data.</p>
          </a>
        ))}
    </div>
  );
};

export default QueryList;
