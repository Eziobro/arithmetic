/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    var rows = triangle.length;
    var cols = triangle[rows - 1].length;
    var dp = [];
    var min = Number.MAX_VALUE;
    for (var i = 0; i < rows; i++) {
        dp[i] = new Array(cols).fill(0);
    }
    for (var r = rows - 1; r >= 0; r--) {
        for (var c = 0; c < r + 1; c++) {
            if (r == rows - 1) {
                dp[r] = triangle[r];
            } else {
                dp[r][c] = Math.min(dp[r + 1][c], dp[r + 1][c + 1]) + triangle[r][c];
            }
        }
    }
    console.log(dp);
    return dp[0][0];
};
// @lc code=end
