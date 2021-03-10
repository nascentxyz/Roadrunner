import axios from "axios";

const handleMaker = async () => {
  const data = await axios.post(
    "https://api.thegraph.com/subgraphs/name/graphitetools/maker",
    {
      query: `
                {
                    makers(first: 1000) {
                        id
                        index
                        rate
                        collaterals {
                        id
                        }
                    }
                    collaterals(first: 1000) {
                        id
                        index
                        rate
                        supply
                    }
                }
            `,
    }
  );

  var new_data = [];
  data.data.data.collaterals.forEach((collateral) => {
    new_data.push({
      name: collateral.id,
      index: collateral.index,
      rate: collateral.rate,
      supply: collateral.supply,
    });
  });

  return { data: new_data, makers: data.data.data.makers };
};

export default handleMaker;
