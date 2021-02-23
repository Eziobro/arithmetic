/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var start = 0,
        end = height.length - 1;
    var total = 0;
    while (start < end) {
        const temp = Math.min(height[start], height[end]) * (end - start);
        total = Math.max(total, temp);
        if (height[start] > height[end]) {
            end--;
        } else {
            start++;
        }
    }
    return total;
};
// @lc code=end

/**
 * 长度 w = j - i
 * 高度 h = min(arr[i],arr[j])
 * 容积 w * h
 */

/**
 * @code
  var total = 0;
  for (var i = 0; i < height.length - 1; i++) {
    for (var j = i + 1; j < height.length; j++) {
      const w = j - i;
      const h = Math.min(height[i], height[j]);
      total = Math.max(total, w * h);
    }
  }
  return total;
 */

/**
 * 暴力解法
 * 遍历两次数组
 * On(n^2)
 */

/**
 * 根据 公式 容积 = min(arr[i],arr[j]) * (j - i)，可以尽量保证 j - i最大
 * https://leetcode-cn.com/problems/container-with-most-water/solution/container-with-most-water-shuang-zhi-zhen-fa-yi-do/
 */
