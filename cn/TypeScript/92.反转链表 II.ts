// @algorithm @lc id=92 lang=typescript 
// @title reverse-linked-list-ii
// @test([1,2,3,4,5],2,4)=[1,4,3,2,5]
// @test([5],1,1)=[5]
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const dummyHead = new ListNode(0, head)
    let p0 = dummyHead
    for (let i = 0; i < left - 1; i++) {
        p0 = p0.next
    }
    let pre = null,
        cur = p0.next
    for (let i = 0; i < right - left; i++) {
        const nxt = cur.next
        cur.next = pre
        pre = cur
        cur = nxt
    }
    p0.next.next = cur
    p0.next = pre
    return dummyHead.next
};

// class ListNode<T = any> {
//     val: T;
//     next: null | ListNode<T>;

//     constructor(val: T, next?: null|ListNode) {
//         this.val = val;
//         this.next = next?next:null;
//     }

//     toString() {
//         const result: T[] = [];
//         let node: ListNode<T> | null = this;
//         while (node != null) {
//             result.push(node.val);
//             node = node.next;
//         }

//         return result;
//     }
//     toArray() {
//         return this.toString();
//     }
// }

// /**
//  * @param arr 链表内容
//  * @param cyclePosition 链表尾部连接的节点(索引从0开始)(成环)
//  * */
// function createLinkedList<T>(arr: T[], cyclePosition = -1) {
//     const head = new ListNode(arr[0]);
//     let currentNode = head;
//     let cycleNode = cyclePosition === 0 ? head : null;
//     for (let i = 1; i < arr.length; i++) {
//         currentNode.next = new ListNode(arr[i]);
//         currentNode = currentNode.next;
//         if (i === cyclePosition) cycleNode = currentNode;
//     }
//     if (!(cyclePosition === -1 || cycleNode == null)) {
//         currentNode.next = cycleNode;
//     }
//     return head;
// }
