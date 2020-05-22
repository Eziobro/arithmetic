/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    if (!grid.length) {
        return 0;
    }
    var item = new Array(grid[0].length);
    var arr = new Array(grid.length).fill([...item]);
    let i, j;
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            if (i === 0 && j === 0) {
                arr[i][j] = grid[i][j];
            } else if (i === 0) {
                arr[i][j] = arr[i][j - 1] + grid[i][j];
            } else if (j === 0) {
                arr[i][j] = arr[i - 1][j] + grid[i][j];
            } else {
                arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1]) + grid[i][j];
            }
        }
    }
    return arr[i - 1][j - 1];
};
// @lc code=end
