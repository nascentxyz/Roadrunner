import axios from "axios";

const handleMaker = async () => {
  const data = await axios.post(
    "https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2",
    {
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
    }
  );

  return { data: data.data.markets };
};

export default handleMaker;