/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    var length = arr.length;
    // debugger;
    for (var i = 0; i < length; i++) {
        if (arr[i] == 0) {
            for (var j = length - 1; j > i + 1; j--) {
                arr[j] = arr[j - 1];
            }
            arr[i + 1] = 0;
            i++;
        }
    }
    arr.length = length;
};
// @lc code=end
