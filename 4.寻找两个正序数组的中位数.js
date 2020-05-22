/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let isW = (nums1.length + nums2.length) % 2 === 0;
    let a0 = Math.ceil((nums1.length + nums2.length) / 2);
    let a1 = isW ? a0 + 1 : a0;
    let i = 0;
    let j = 0;
    let arr = [];
    let result = 0;

    while (arr.length < a1) {
        if (typeof nums1[i] == 'undefined') {
            arr.push(nums2[j++]);
        } else if (typeof nums2[j] == 'undefined') {
            arr.push(nums1[i++]);
        } else if (nums1[i] < nums2[j]) {
            arr.push(nums1[i++]);
        } else {
            arr.push(nums2[j++]);
        }
    }

    if (a0 === a1) {
        result = arr[arr.length - 1];
    } else {
        result = (arr[arr.length - 1] + arr[arr.length - 2]) / 2;
    }

    return result;
};
// @lc code=end
