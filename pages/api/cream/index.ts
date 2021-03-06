import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const Cream = (req: NextApiRequest, res: NextApiResponse) => {
  axios
    .post("https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2", {
      query: `
            {
                markets(first: 100) {
                    borrowRate
                    cash
                    collateralFactor
                    exchangeRate
                    interestRateModelAddress
                    name
                    reserves
                    supplyRate
                    symbol
                    id
                    totalBorrows
                    totalSupply
                    underlyingAddress
                    underlyingName
                    underlyingPrice
                    underlyingSymbol
                    reserveFactor
                    underlyingPriceUSD
                }
            }
        `,
    })
    .then((result) => {
      res.status(200).json(result.data);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

export default Cream;
