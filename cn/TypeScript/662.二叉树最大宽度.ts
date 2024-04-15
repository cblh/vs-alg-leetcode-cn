// @algorithm @lc id=662 lang=typescript 
// @title maximum-width-of-binary-tree
// @test([1,3,2,5,3,null,9])=4
// @test([1,3,2,5,null,null,9,6,null,7])=7
// @test([1,3,2,5])=2
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
function widthOfBinaryTree(root: TreeNode | null): number {
    let map = new Map<number, number>()
    let ans = 0
    function dfs(root: TreeNode | null, u: number, depth: number): void {
        if (root === null) {
            return
        }
        if (!map.has(depth)) {
            map.set(depth, u)
        }
        ans = Math.max(ans, u - map.get(depth) + 1)
        u = u - map.get(depth) + 1
        dfs(root.left, u << 1, depth + 1)
        dfs(root.left, u << 1 | 1, depth + 1)
    }
    dfs(root, 1, 0)
    return ans
}
