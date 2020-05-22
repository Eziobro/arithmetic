/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var maxPrice = 0,
        i;
    for (i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) maxPrice += prices[i] - prices[i - 1];
    }
    return maxPrice;
};
// @lc code=end
