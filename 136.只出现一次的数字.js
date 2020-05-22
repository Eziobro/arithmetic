/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var point = 0;
    for (var i = 0; i < nums.length; i++) {
        point ^= nums[i];
    }
    return point;
};
// @lc code=end
