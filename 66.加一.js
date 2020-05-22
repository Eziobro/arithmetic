/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    var arr = new Array();
    var point = 1;
    digits.reverse().forEach((t) => {
        arr.unshift((t + point) % 10);
        point = Math.floor((t + point) / 10);
    });
    if (point == 1) arr.unshift(point);
    return arr;
};
// @lc code=end
