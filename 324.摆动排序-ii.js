/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    let n = nums.length;
    if (n == 0) return;
    let a = JSON.parse(JSON.stringify(nums));
    a = a.sort(sortNumber);
    console.log(a);
    let k = 0;
    let p = Math.floor((n - 1) / 2);
    let q = n - 1;
    let sign = true;
    while (k < n) {
        if (sign) nums[k++] = a[p--];
        else nums[k++] = a[q--];
        sign = !sign;
    }

    function sortNumber(a, b) {
        return a - b;
    }
};
// @lc code=end
