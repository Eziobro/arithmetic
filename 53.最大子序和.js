/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var sum = 0;
    var max = nums[0];
    for (var index of nums) {
        if (sum > 0) {
            sum += index;
        } else {
            sum = index;
        }
        max = Math.max(sum, max);
    }
    return max;
};
// @lc code=end
