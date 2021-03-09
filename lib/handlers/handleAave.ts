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
  reserves.data.reserves.forEach(async (reserve) => {
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
    result.push(data.data.reserve);
  });

  return result;
};

export default handleAave;
