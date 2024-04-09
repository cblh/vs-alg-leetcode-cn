// @algorithm @lc id=82 lang=typescript 
// @title remove-duplicates-from-sorted-list-ii
// @test([1,2,3,3,4,4,5])=[1,2,5]
// @test([1,1,1,2,3])=[2,3]
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null) {
        return head
    }
    const dummyHead = new ListNode(0, head)
    let cur = head
    let prev = dummyHead
    while (cur !== null) {
        while (cur.next && cur.next.val === cur.val) {
            cur = cur.next
        }
        if (prev.next === cur) {
            prev = cur
        } else {
            prev.next = cur.next
        }
        cur = cur.next
    }
    return dummyHead.next
};