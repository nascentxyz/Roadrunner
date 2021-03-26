import axios from "axios";

const handleMaker = async () => {
  const data = await axios.post(
    "https://api.thegraph.com/subgraphs/name/protofire/maker-protocol",
    {
      query: `
                {
                    collateralTypes(orderBy: addedAt) {
                        name: id
                        price {
                        value
                        block
                        }
                        rate
                        debtCeiling
                        totalDebt
                        totalCollateral
                        liquidationLotSize
                        liquidationPenalty
                        liquidationRatio
                        stabilityFee
                        auctionCount
                        vaultCount
                    }
                    }
            `,
    }
  );

  var new_data = [];
  data.data.data.collateralTypes.forEach((collateral) => {
    new_data.push({
      name: collateral.name,
      borrowRate: parseFloat(
        (Math.pow(collateral.stabilityFee, 31540000) - 1) * 100 + ""
      ).toFixed(2),
      supplyRate: "-", // 0,
      reserveFactor: "-", // collateral.stabilityFee,
      collateralFactor: parseFloat(
        1 / collateral.liquidationRatio + ""
      ).toFixed(2),
      totalBorrow: collateral.totalDebt,
      totalSupply: collateral.totalCollateral,
    });
  });

  return { data: new_data };
};

export default handleMaker;

/*
{
  vaults(where: {cdpId_not: null}, orderBy: cdpId) {
    collateralType {
      name: id
      price {
        value
        block
      }
      debtCeiling
      totalDebt
      totalCollateral
      liquidationLotSize
      liquidationPenalty
      liquidationRatio
      stabilityFee
      auctionCount
      vaultCount
    }
    collateral
    debt
    owner {
      id
    }
  }
}

*/
