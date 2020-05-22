/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (!matrix.length) {
        return 0;
    }

    var matrixLine = matrix.length;
    var matrixNums = matrix[0].length;
    var dp = [];
    var maxMatrix = 0;

    for (var i = 0; i < matrixLine; i++) {
        dp[i] = [];
    }
    for (var i = 0; i < matrixLine; i++) {
        for (var j = 0; j < matrixNums; j++) {
            if (matrix[i][j] == '1') {
                dp[i][j] =
                    Math.min(i && j ? dp[i - 1][j - 1] : 0, i ? dp[i - 1][j] : 0, j ? dp[i][j - 1] : 0) + 1;
                maxMatrix = dp[i][j] > maxMatrix ? dp[i][j] : maxMatrix;
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return maxMatrix * maxMatrix;
};
// @lc code=end
