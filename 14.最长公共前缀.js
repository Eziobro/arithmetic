/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var str = '';
    var k = 0;
    var point = true;
    var maxlen = 0;
    for (var i = 0; i < strs.length; i++) {
        if (maxlen < strs[i].length) maxlen = strs[i].length;
    }
    while (true) {
        var s = strs[0];
        for (var i = 1; i < strs.length; i++) {
            var ss = strs[i];
            if (ss.charAt(k) != s.charAt(k)) {
                point = false;
                break;
            }
        }
        if (point && k < maxlen) {
            str += s.charAt(k);
            k++;
        } else break;
    }
    return str;
};
// @lc code=end
