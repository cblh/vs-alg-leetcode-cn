// @algorithm @lc id=138 lang=typescript 
// @title copy-list-with-random-pointer
// @test([[7,null],[13,0],[11,4],[10,2],[1,0]])=[[7,null],[13,0],[11,4],[10,2],[1,0]]
// @test([[1,1],[2,1]])=[[1,1],[2,1]]
// @test([[3,null],[3,0],[3,null]])=[[3,null],[3,0],[3,null]]
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    const map = new Map<Node, Node>()
    let cur = head
    while (cur !== null) {
        map.set(cur, new Node(cur.val))
        cur = cur.next
    }
    cur = head
    while (cur !== null) {
        map.get(cur).next = map.get(cur.next) ?? null
        map.get(cur).random = map.get(cur.random) ?? null
        cur = cur.next
    }
    return map.get(head)
};