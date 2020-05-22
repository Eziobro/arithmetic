/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const l = ListNodeAdd(l1, l2, 0);
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    function ListNodeAdd(ListNode1, ListNode2, over) {
        if (!ListNode1 && !ListNode2) {
            if (over) {
                return new ListNode(over);
            } else {
                return null;
            }
        }
        const sum = (ListNode1 && ListNode1.val) + (ListNode2 && ListNode2.val) + over;
        const LN = new ListNode(sum % 10);
        LN.next = ListNodeAdd(ListNode1 && ListNode1.next, ListNode2 && ListNode2.next, Math.floor(sum / 10));
        return LN;
    }
    return l;
};
// @lc code=end
