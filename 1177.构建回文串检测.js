/*
 * @lc app=leetcode.cn id=1177 lang=javascript
 *
 * [1177] 构建回文串检测
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
    return queries.map((query) => {
        const queryStr = s.substring(query[0], query[1] + 1);
        const obj = {};
        for (const _s of queryStr) {
            if (!obj[_s]) {
                obj[_s] = 1;
            } else {
                obj[_s]++;
            }
        }

        const times = Object.values(obj).filter((_v) => _v % 2 === 1).length;
        const makeTimes = Math.floor(times / 2);
        return query[2] >= makeTimes;
    });
};
// @lc code=end
