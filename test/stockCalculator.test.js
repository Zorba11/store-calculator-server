const assert = require('assert');
const stockCalculator = require('../stockCalculator');

describe('StockCalculator functions', function() {

  let calculateMaxProfit = stockCalculator.calculateMaxProfit;
  let calculateMaxProfitWithShortSell = stockCalculator.calculateMaxProfitWithShortSell;

  context('calculateMaxProfit', function() {

    it('should throw an error if the input has less than 2 data points', function() {
      let prices = [];
      assert.throws(() => { calculateMaxProfit(prices) }, Error, "Need atleast two time periods to make a profit!!");
    });

    it('should return the maximum profit for a steady series of prices', function() {
      let prices = [7, 5, 6, 10, 7, 4, 5, 8];
      assert.strictEqual(calculateMaxProfit(prices), 6);
    });

    it('should return a minimum loss if the prices have decreasing trend', function() {
      let prices = [27, 23, 18, 16, 1];
      assert.strictEqual(calculateMaxProfit(prices), -2);
    });

  });

  context('calculateMaxProfitWithShortSell', function() {

    it('should throw an error if the input has less than 2 data points', function() {
      let prices = [8];
      assert.throws(() => { calculateMaxProfitWithShortSell(prices) }, Error, "Need atleast two time periods to make a profit!!");
    });

    it('should return max profit with short selling when possible', function() {
      let prices = [3, 7, 15, 9, 6, 9, 5, 7, 2]
      assert.strictEqual(calculateMaxProfitWithShortSell(prices), 13);
    });

    it('should return long sell profit value if short selling is not possible', function() {
      let prices = [2, 6, 13, 18, 5, 5]
      assert.strictEqual(calculateMaxProfitWithShortSell(prices), 16);
    });

  });

});
