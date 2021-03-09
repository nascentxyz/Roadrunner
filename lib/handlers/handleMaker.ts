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

  return data.data;
};

export default handleMaker;
