/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (var i = nums1.length - 1; i >= m; i--) nums1.pop();
    for (var i = 0; i < n; i++) {
        var x = nums2.shift();
        nums1.push(x);
    }
    nums1.sort(function (a, b) {
        return a - b;
    });
};
// @lc code=end
