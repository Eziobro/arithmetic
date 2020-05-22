/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var buy = prices[0];
    var maxEarn = 0;
    prices.forEach((item) => {
        if (item < buy) {
            buy = item;
        }
        if (item - buy > maxEarn) {
            maxEarn = item - buy;
        }
    });
    return maxEarn;
};
// @lc code=end
