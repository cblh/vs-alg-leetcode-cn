// @algorithm @lc id=234 lang=typescript 
// @title palindrome-linked-list
// @test([1,2,2,1])=true
// @test([1,2])=false
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

function isPalindrome(head: ListNode | null): boolean {
    let slow = head,
        fast = head.next
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    let cur = slow.next
    slow.next = null
    let prev = cur
    while (cur !== null) {
        let t = cur.next
        cur.next = prev
        prev = cur
        cur = t
    }
    while (prev !== null) {
        if (prev.val !== head.val) {
            return false
        }
        prev = prev.next
        head = head.next
    }
    return true
};