// @algorithm @lc id=148 lang=typescript 
// @title sort-list
// @test([4,2,1,3])=[1,2,3,4]
// @test([-1,5,3,4,0])=[-1,0,3,4,5]
// @test([])=[]
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function sortList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head
    }
    let slow: ListNode = head,
        fast: ListNode = head.next
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    let mid = slow.next
    slow.next = null
    let l1 = sortList(head)
    let l2 = sortList(mid)
    let dummyHead = new ListNode()
    let cur = dummyHead
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    cur.next = l1 === null ? l2 : l1
    return dummyHead.next
};