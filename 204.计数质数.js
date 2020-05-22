/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    function isprisme(n) {
        if (n == 2 || n == 3) return 1;
        if (n % 6 != 1 && n % 6 != 5) return 0;
        var tem = Math.sqrt(n);
        for (var i = 5; i <= tem; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return 0;
        }
        return 1;
    }
    var num = 0;
    for (var i = 2; i < n; i++) {
        num += isprisme(i);
    }
    return num;
};
// @lc code=end
