import axios from "axios";

const handleAave = async () => {
  const reserves = await axios.post(
    "https://api.thegraph.com/subgraphs/name/aave/protocol",
    {
      query: `
                    {
                        reserves (where: {
                            usageAsCollateralEnabled: true
                        }) {
                            id
                            name
                            price {
                                id
                            }
                            liquidityRate
                            variableBorrowRate
                            stableBorrowRate
                        }
                    }
            `,
    }
  );

  var result = [];
  for (let index = 0; index < reserves.data.data.reserves.length; index++) {
    let reserve = reserves.data.data.reserves[index];
    let data = await axios.post(
      "https://api.thegraph.com/subgraphs/name/aave/protocol",
      {
        query: `
                        {
                            reserve(id: "${reserve.id}") {
                                symbol
                                name
                                usageAsCollateralEnabled
                                isActive
                                reserveInterestRateStrategy
                                optimalUtilisationRate
                                variableRateSlope1
                                variableRateSlope2
                                stableRateSlope1
                                stableRateSlope2
                                baseVariableBorrowRate
                                baseLTVasCollateral
                                baseVariableBorrowRate
                                reserveLiquidationThreshold
                                reserveLiquidationBonus
                                utilizationRate
                                totalLiquidity
                                totalLiquidityAsCollateral
                                availableLiquidity
                                totalBorrows
                                totalBorrowsStable
                                totalBorrowsVariable
                                liquidityRate
                                variableBorrowRate
                                stableBorrowRate
                                averageStableBorrowRate
                                liquidityIndex
                                variableBorrowIndex
                                lastUpdateTimestamp
                                lifetimeLiquidity
                                lifetimeBorrows
                                lifetimeBorrowsStable
                                lifetimeBorrowsVariable
                                price {
                                id
                                oracle {
                                    id
                                    usdPriceEth
                                    usdPriceEthMainSource
                                    lastUpdateTimestamp
                                }
                                priceInEth
                                priceSource
                                isFallbackRequired
                                lastUpdateTimestamp
                                }
                                aToken {
                                id
                                }
                            }
                        }
                `,
      }
    );

    result.push({
      borrowRate: parseFloat(
        data.data.data.reserve.stableBorrowRate * 100 + ""
      ).toFixed(2),
      supplyRate: parseFloat(
        data.data.data.reserve.liquidityRate * 100 + ""
      ).toFixed(2),
      reserveFactor: data.data.data.reserve.reserveLiquidationThreshold,
      collateralFactor: data.data.data.reserve.baseLTVasCollateral,
      totalBorrow: data.data.data.reserve.totalBorrows,
      totalSupply: data.data.data.reserve.totalLiquidity,
      id: data.data.data.reserve.aToken.id,
      ...data.data.data.reserve,
      name:
        data.data.data.reserve.name +
        " (" +
        data.data.data.reserve.symbol +
        ")",
    });
  }

  return { data: result };
};

export default handleAave;
