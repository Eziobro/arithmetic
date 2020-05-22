/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var strLen = s.length;
    var dp = [];
    var Maxi = 0,
        Maxj = 0;
    for (var i = 0; i < strLen; i++) {
        var arr = [];
        arr[i] = true;
        if (i < strLen - 1 && s[i] == s[i + 1]) {
            arr[i + 1] = true;
            Maxi = i;
            Maxj = i + 1;
        }
        dp[i] = arr;
    }
    for (var Len = 3; Len <= strLen; Len++) {
        for (var i = 0; i <= strLen - Len; i++) {
            var j = i + Len - 1;
            if (s[i] == s[j]) {
                if (dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    Maxi = i;
                    Maxj = j;
                }
            } else {
                dp[i][j] = false;
            }
        }
    }
    return s.slice(Maxi, Maxj + 1);
};
// @lc code=end
