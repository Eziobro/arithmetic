/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var time = 1;
    var str = "1";
    while(time<n){
        var sss = "";
        var point = str.charAt(0);
        var nums = 0;
        for(var i = 0; i < str.length; i++){
            if(str.charAt(i) == point){
                nums++;
            }
            else{
                sss = sss + String(nums) + point;
                point = str.charAt(i);
                nums = 1;
            }
        }
        sss = sss + String(nums) + point;
        time++;
        str = sss;
    }
    return str;
};
};
// @lc code=end

