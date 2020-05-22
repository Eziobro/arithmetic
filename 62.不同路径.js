/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    var dpx = [];
    var dpy = [];
    for (var i = 0; i < m; i++) {
        dpy[i] = 1;
    }
    dpx[0] = dpy;
    for (var j = 1; j < n; j++) {
        dpx[j] = [1];
    }
    for (var i = 1; i < n; i++) {
        for (var j = 1; j < m; j++) {
            dpx[i][j] = dpx[i - 1][j] + dpx[i][j - 1];
        }
    }
    return dpx[n - 1][m - 1];
};
// @lc code=end
