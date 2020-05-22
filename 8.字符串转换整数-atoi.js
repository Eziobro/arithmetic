/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = parseInt(str);
    if (str.length == 0 || isNaN(str)) return 0;
    if (str > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    else if (str < Math.pow(-2, 31)) return Math.pow(-2, 31);
    else return str;
};
// @lc code=end
