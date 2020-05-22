/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    for (var i = 0; i < s.length; i++) {
        var ch = s.charAt(i);
        if (s.indexOf(ch) == i && s.lastIndexOf(ch) == i) return i;
    }
    return -1;
};
// @lc code=end
