/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let n = 0;
    while (num >= 10) {
        n += num % 10;
        num = Math.floor(num / 10);

        if (num < 10) {
            num += n;
            n = 0;
        }
    }
    return num;
};
// @lc code=end

/**
 * 数论 解法
 * 设 num = 1000a + 100b + 10c + d
 * 即 num1 = a + b + c + d
 * num - num1 = 999a + 99b + 9c 前后两个数之差是9的倍数
 * 则 num 和 num1 有除以9相同的余数
 * 同理 num2 ..... numN
 * 即 numN % 9 === num2 % 9 === num1 % 9 === num % 9
 */

//  var addDigits = function (num) {
//     if (num === 0) {
//         return num;
//     }

//     return num % 9 || 9;
// };
