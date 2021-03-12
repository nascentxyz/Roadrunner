import axios from "axios";

const handleCompound = async () => {
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

export default handleCompound;
