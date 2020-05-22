/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    var mon = [];
    var len = nums.length;
    mon[0] = 0;
    mon[1] = nums[0];
    for (var i = 1; i < len; i++) {
        mon[i + 1] = Math.max(mon[i], nums[i] + mon[i - 1]);
    }
    return mon[len];
};
// @lc code=end
