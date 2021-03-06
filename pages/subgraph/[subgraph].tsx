import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import { Head, Header, Roadrunner } from "../../components";
import {
  container,
  main,
  title,
  description,
  leftDiv,
  rightDiv,
  gridContainer,
  searchBar,
  subgraphCard,
  code,
} from "../../styles";
import { fetcher } from "../../lib";
import { useState } from "react";

const Container = styled.div`
  background-color: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
`;

const BreakP = styled.p`
  word-break: break-all;
`;

const Subgraph = (req) => {
  const [filter, setFilter] = useState("");
  const router = useRouter();
  const { subgraph }: any = router.query;
  const { data, error } = useSWR(`/api/graph/${subgraph}`, fetcher);
  const hostname =
    typeof window !== "undefined" && window.location.hostname
      ? window.location.hostname
      : "";
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  return (
    <Container className={container}>
      <Head />
      <Header />

      <main className={main}>
        {error ? (
          <h1 className={title}>Failed to fetch subgraph!</h1>
        ) : (
          <div className={gridContainer}>
            <div className={leftDiv}>
              <a href={"/"}>
                <div style={{ margin: "auto" }}>
                  <Roadrunner color={"currentColor"} alt="Roadrunner Logo" />
                </div>
              </a>
              <h1 className={title}>
                {subgraph
                  ? subgraph.substring(0, 1).toUpperCase() +
                    subgraph.substring(1)
                  : ""}
              </h1>
              <p className={description}>
                Fetched{" "}
                {subgraph
                  ? subgraph.substring(0, 1).toUpperCase() +
                    subgraph.substring(1)
                  : ""}{" "}
                data from <a href={"https://thegraph.com/"}>The Graph</a>.
              </p>
              <a
                href={`${origin}/api/graph/${subgraph}`}
                className={code}
              >{`${origin}/api/graph/${subgraph}`}</a>
            </div>
            <div className={rightDiv}>
              <div className={searchBar}>
                <TextField
                  id="outlined-search"
                  onChange={(input) => setFilter(input.target.value)}
                  label="Dai, Ether..."
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
              {!data ? (
                <h1 className={title}>Loading...</h1>
              ) : (
                data.data.markets
                  .filter((market) =>
                    market.name.toLowerCase().includes(filter)
                  )
                  .map((market) => (
                    <div
                      key={Object.entries(market).join()}
                      className={subgraphCard}
                    >
                      <h3>{market.name}</h3>
                      <BreakP>Borrow rate: {market.borrowRate}</BreakP>
                      <BreakP>Supply rate: {market.supplyRate}</BreakP>
                      <BreakP>
                        Collateral rate: {market.collateralFactor}
                      </BreakP>
                      <BreakP>Reserve Factor: {market.reserveFactor}</BreakP>
                      <BreakP>Total Borrow: {market.totalBorrow}</BreakP>
                      <BreakP>Total Suppy: {market.totalSupply}</BreakP>
                      <BreakP>id: {market.id}</BreakP>
                    </div>
                  ))
              )}
            </div>
          </div>
        )}
      </main>
    </Container>
  );
};

export default Subgraph;
