// @algorithm @lc id=103 lang=typescript 
// @title binary-tree-zigzag-level-order-traversal
// @test([3,9,20,null,null,15,7])=[[3],[20,9],[15,7]]
// @test([1])=[[1]]
// @test([])=[]
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = []
    let level = 0
    if (!root) {
        return res;
    }
    function bfs(root: TreeNode | null) {
        const stack: TreeNode[] = []
        stack.push(root)
        while (stack.length > 0) {
            const qq: TreeNode[] = [];
            const t: number[] = []
            for (const { val, left, right } of stack) {
                t.push(val);
                left && qq.push(left);
                right && qq.push(right);
            }
            res.push(level % 2 === 0 ? t : t.reverse())
            stack.splice(0, stack.length, ...qq)
            level++
        }
    }
    bfs(root)
    return res
};