/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    s = s.split('');
    t = t.split('');
    s.sort();
    t.sort();
    for (var i in s) {
        if (s[i] != t[i]) return false;
    }
    return true;
};
// @lc code=end
