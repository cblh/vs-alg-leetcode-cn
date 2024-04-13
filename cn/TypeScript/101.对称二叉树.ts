// @algorithm @lc id=101 lang=typescript 
// @title symmetric-tree
// @test([1,2,2,3,4,4,3])=true
// @test([1,2,2,null,3,null,3])=false
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

function isSymmetric(root: TreeNode | null): boolean {
    function dfs(root1: TreeNode | null, root2: TreeNode | null) {
        if (root1 === null && root2 === null) {
            return true
        }
        if (root1 === null || root2 === null || root1.val !== root2.val) {
            return false
        }
        return dfs(root1.left, root2.right) && dfs(root1.right, root2.left)
    }
    return dfs(root, root)
};