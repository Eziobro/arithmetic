/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let right = 0;
    let max = 0;
    const len = s.length;
    let set = new Set();
    while (left < len && right < len) {
        if (left === right || !set.has(s[right])) {
            set.add(s[right]);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
        max = Math.max(max, right - left);
    }
    return max;
};
// @lc code=end
