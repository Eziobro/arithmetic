/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var Len = s.length;
    var arr = [];
    var valid = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (var i = 0; i < Len; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            arr.push(s[i]);
        } else {
            if (s[i] != valid[arr[arr.length - 1]]) {
                return false;
            } else {
                arr.length--;
            }
        }
    }
    if (arr.length != 0) {
        return false;
    }
    return true;
};
// @lc code=end
