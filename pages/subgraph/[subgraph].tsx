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
} from "../../styles";
import { fetcher } from "../../lib";
import { useState } from "react";

const Container = styled.div`
  background-color: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
`;

const Subgraph = () => {
  const [filter, setFilter] = useState("");
  const router = useRouter();
  const { subgraph }: any = router.query;
  const { data, error } = useSWR(`/api/graph/${subgraph}`, fetcher);

  return (
    <Container className={container}>
      <Head />
      <Header />

      <main className={main}>
        {error ? (
          <h1 className={title}>Failed to fetch subgraph!</h1>
        ) : !data ? (
          <h1 className={title}>Loading...</h1>
        ) : (
          <div className={gridContainer}>
            <div className={leftDiv}>
              <a href={"/"}>
                <div style={{ margin: "auto" }}>
                  <Roadrunner color={"currentColor"} alt="Roadrunner Logo" />
                </div>
              </a>
              <h1 className={title}>
                {subgraph.substring(0, 1).toUpperCase() + subgraph.substring(1)}
              </h1>
              <p className={description}>
                Fetched {subgraph} data from The Graph.
              </p>
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
              {data.data.markets
                .filter((market) => market.name.toLowerCase().includes(filter))
                .map((market) => (
                  <>
                    <h3>{market.name}</h3>
                    <p>Borrow rate: {market.borrowRate}</p>
                    <p>Supply rate: {market.supplyRate}</p>
                    <p>Collateral rate: {market.collateralFactor}</p>
                    <p>Reserve Factor: {market.reserveFactor}</p>
                    <p>Total Borrow: {market.totalBorrow}</p>
                    <p>Total Suppy: {market.totalSupply}</p>
                    <p>id: {market.id}</p>
                  </>
                ))}
            </div>
          </div>
        )}
      </main>
    </Container>
  );
};

export default Subgraph;
