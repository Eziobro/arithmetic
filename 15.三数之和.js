/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    let length = nums.length;
    nums.sort((a, b) => a - b);
    if (nums[0] <= 0 && nums[length - 1] >= 0) {
        for (let i = 0; i < length - 2; ) {
            if (nums[i] > 0) break;
            let first = i + 1;
            let last = length - 1;
            do {
                if (first >= last || nums[i] * nums[last] > 0) break;
                let result = nums[i] + nums[first] + nums[last];
                if (result === 0) {
                    res.push([nums[i], nums[first], nums[last]]);
                }
                if (result <= 0) {
                    while (first < last && nums[first] === nums[++first]) {} // 如果相等就跳过
                } else {
                    while (first < last && nums[last] === nums[--last]) {}
                }
            } while (first < last);
            while (nums[i] === nums[++i]) {}
        }
    }
    return res;
};
// @lc code=end

/**
 * 双指针解法
 * 1. sort
 * 2. Head > 0 || Tail < 0 => return
 * 3. Head + 1 === Head => continue
 */

// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end
