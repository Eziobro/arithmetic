/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const arr = [];
    const getPath = function (obj, str) {
        if (!obj) {
            return;
        }
        if (!obj.left && !obj.right) {
            arr.push(str + obj.val + "");
            return;
        }
        getPath(obj.left, str + obj.val + "->");
        getPath(obj.right, str + obj.val + "->");
    };
    getPath(root, "");
    return arr;
};
// @lc code=end

binaryTreePaths({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: { val: 5, left: null, right: null },
    },
    right: { val: 3, left: null, right: null },
});

// var binaryTreePaths = function (root) {
//     const arr = [];
//     const _root = JSON.parse(JSON.stringify(root));
//     const getTreeNode = function (idx, str) {
//         const val = _root[idx];
//         if (val === null) {
//             return;
//         }
//         if (val !== undefined) {
//             const _obj = {
//                 val: val,
//                 left: getTreeNode(idx * 2 + 1, str + val + "->"),
//                 right: getTreeNode(idx * 2 + 2, str + val + "->"),
//             };
//             if (!_obj.left && !_obj.right) {
//                 arr.push(str + val + "");
//             }
//             return _obj;
//         }
//     };
//     getTreeNode(0, "");
//     return arr;
// };

// binaryTreePaths([1]);
