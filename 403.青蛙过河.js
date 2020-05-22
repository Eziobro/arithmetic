/*
 * @lc app=leetcode.cn id=403 lang=javascript
 *
 * [403] 青蛙过河
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
    if (stones[1] !== 1) {
        return false;
    }
    var len = stones.length;
    if (len === 2) {
        return true;
    }
    var map = {};
    for (var i = 1; i < len; i++) {
        map[stones[i]] = new Set();
    }
    map[stones[1]].add(1);
    for (var i = 1; i < len - 1; i++) {
        var stone = stones[i];
        var steps = map[stone];
        for (var step of steps) {
            for (var j = -1; j <= 1; j++) {
                if (step + j <= 0) {
                    continue;
                }
                var reach = stone + step + j;
                if (reach === stones[len - 1]) {
                    return true;
                }
                if (map[reach]) {
                    map[reach].add(step + j);
                }
            }
        }
    }
    return false;
};
// @lc code=end
