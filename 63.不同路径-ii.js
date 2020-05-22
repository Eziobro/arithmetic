/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    var dpx = [];
    var dpy = [];
    var m = obstacleGrid[0].length;
    var n = obstacleGrid.length;
    if (obstacleGrid[0][0] == 1) {
        return 0;
    } else {
    }
    for (var i = 0; i < m; i++) {
        if (obstacleGrid[0][i] == 0) {
            dpy[i] = 1;
        } else {
            for (var j = i; j < m; j++) {
                dpy[j] = 0;
            }
            break;
        }
    }
    dpx[0] = dpy;
    for (var i = 1; i < n; i++) {
        if (obstacleGrid[i][0] == 0) {
            dpx[i] = [1];
        } else {
            for (var j = i; j < n; j++) {
                dpx[j] = [0];
            }
            break;
        }
    }
    for (var i = 1; i < n; i++) {
        for (var j = 1; j < m; j++) {
            if (obstacleGrid[i][j] == 0) {
                dpx[i][j] = dpx[i - 1][j] + dpx[i][j - 1];
            } else {
                dpx[i][j] = 0;
            }
        }
    }
    return dpx[n - 1][m - 1];
};
// @lc code=end
