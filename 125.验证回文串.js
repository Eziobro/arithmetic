/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/\W/g, '').toLowerCase();
    var len = s.length;
    if (len == 0) return true;
    console.log(s);
    var start = 0;
    var end = len - 1;
    while (start < end) {
        if (s[start] != s[end]) return false;
        start++;
        end--;
    }
    return true;
};
// @lc code=end
