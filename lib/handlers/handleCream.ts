import axios from "axios";

const handleCream = async () => {
  const data = await axios.post(
    "https://api.thegraph.com/subgraphs/name/creamfinancedev/cream-lending-v2",
    {
      query: `
            {
                markets(first: 1000) {
                    borrowRate
                    cash
                    collateralFactor
                    exchangeRate
                    name
                    reserves
                    supplyRate
                    symbol
                    id
                    totalBorrows
                    totalSupply
                    underlyingName
                    underlyingPrice
                    underlyingSymbol
                    underlyingAddress
                    accrualBlockNumber
                    blockTimestamp
                    borrowIndex
                    reserveFactor
                    underlyingPriceUSD
                    underlyingDecimals
                }
            }
        `,
    }
  );

  var result = [];
  for (let index = 0; index < data.data.data.markets.length; index++) {
    result.push({
      totalBorrow: data.data.data.markets[index].totalBorrows,
      ...data.data.data.markets[index],
      name:
        data.data.data.markets[index].name +
        " (" +
        data.data.data.markets[index].underlyingSymbol +
        ")",
    });
  }

  return { data: result };
};

export default handleCream;
