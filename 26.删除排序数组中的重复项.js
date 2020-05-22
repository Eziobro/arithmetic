/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var point = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[point] != nums[i]) nums[++point] = nums[i];
    }
    return nums.length ? point + 1 : 0;
};
// @lc code=end
