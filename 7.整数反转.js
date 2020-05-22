/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var point = 1;
    if (x < 0) {
        point = 0;
        x *= -1;
    }
    var y = 0;
    while (x != 0) {
        y = y * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    if (y > Math.pow(2, 31) - 1 || y < -1 * Math.pow(2, 31)) return 0;
    if (point == 0) y *= -1;
    return y;
};
// @lc code=end
