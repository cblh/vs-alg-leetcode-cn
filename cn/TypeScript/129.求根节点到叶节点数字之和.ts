// @algorithm @lc id=129 lang=typescript 
// @title sum-root-to-leaf-numbers
// @test([1,2,3])=25
// @test([4,9,0,5,1])=1026
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

function sumNumbers(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, s: number): number {
        if (node === null) {
            return 0
        }
        s = s  * 10 + node.val
        if (node.left === null && root.right === null) {
            return s
        }
        const left = dfs(node.left, s),
            right = dfs(node.right, s)
        return left + right
    }
    return dfs(root, 0)
};