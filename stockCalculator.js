const calculateMaxProfit = (prices) => {

  //Time complexity - O(n)

  if(prices.length < 2) {
    throw new Error("Need atleast two time periods to make a profit!!");
  }

  //also assuming inputs are always correct

  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    let potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

const calculateMaxProfitWithShortSell = (prices) => {

  //Time complexity - O(2n) => O(n)

  if(prices.length < 2) {
    throw new Error("Need atleast two time periods to make a profit!!");
  }

  //also assuming inputs are always correct

  let maxProfitLong = calculateMaxProfit(prices);

  let maxPrice = prices [0];
  let maxProfitByShortSell = prices[0] - prices[1];

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    let potentialProfit = maxPrice - currentPrice;

    maxProfitByShortSell = Math.max(maxProfitByShortSell, potentialProfit);
    maxPrice = Math.max(maxPrice, currentPrice);
  }

  maxProfit = Math.max(maxProfitByShortSell, maxProfitLong);

  return maxProfit;
}

module.exports = {
  calculateMaxProfit,
  calculateMaxProfitWithShortSell
}


