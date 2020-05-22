/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanArr = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        if (i + 1 >= s.length || romanArr[s[i]] >= romanArr[s[i + 1]]) {
            result += romanArr[s[i]];
        } else {
            result -= romanArr[s[i]];
        }
    }
    return result;
};
// @lc code=end
