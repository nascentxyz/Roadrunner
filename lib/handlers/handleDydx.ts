import axios from "axios";

const handleDydx = async () => {
  const data = await axios.post(
    "https://api.thegraph.com/subgraphs/name/graphitetools/dydx",
    {
      query: `
                {
                    markets(first: 1000) {
                        id
                        token {
                            id
                            address
                        }
                        supplyRate
                        borrowRate
                        supplyIndex
                        borrowIndex
                    }
                }
            `,
    }
  );

  var new_data = [];
  for (let index = 0; index < data.data.data.markets.length; index++) {
    let market = data.data.data.markets[index];
    let token_name = "";
    // TODO: fix bellow.. bad api only for PRO accounts
    try {
      let url = `https://api.etherscan.io/api?module=token&action=tokeninfo&contractaddress=${market.token.address}&apikey=${process.env.ETHERSCAN_API_KEY}`;
      let token_data = await axios.get(url);
      token_name = token_data["result"][0]["tokenName"];
    } catch (e) {
      // * IGNORE
    }
    new_data.push({
      name: token_name,
      id: market.token.address,
      borrowRate: parseFloat(
        market.borrowRate / 10000000000000000 + ""
      ).toFixed(2),
      supplyRate: parseFloat(
        market.supplyRate / 10000000000000000 + ""
      ).toFixed(2),
      reserveFactor: "-",
      collateralFactor: "-",
      totalBorrow: "-",
      totalSupply: "-",
    });
  }

  return { data: new_data };
};

export default handleDydx;
