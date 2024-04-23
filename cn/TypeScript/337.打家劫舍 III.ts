// @algorithm @lc id=337 lang=typescript 
// @title house-robber-iii
// @test([3,2,3,null,3,null,1])=7
// @test([3,4,5,1,3,null,1])=9
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

function rob(root: TreeNode | null): number {
    const dfs = (root: TreeNode | null): [number, number] => {
        if (!root) {
            return [0, 0]
        }
        const [la, lb] = dfs(root.left)
        const [ra, rb] = dfs(root.right)
        return [root.val + lb + rb, Math.max(la, lb) + Math.max(ra, rb)]
    }
    return Math.max(...dfs(root))
};