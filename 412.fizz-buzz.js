/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var arr = new Array();
    for (var i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) arr.push('FizzBuzz');
        else if (i % 3 == 0) arr.push('Fizz');
        else if (i % 5 == 0) arr.push('Buzz');
        else arr.push(i + '');
    }
    return arr;
};
// @lc code=end
