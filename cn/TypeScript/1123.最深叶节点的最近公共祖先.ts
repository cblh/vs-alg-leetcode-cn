// @algorithm @lc id=1218 lang=typescript 
// @title lowest-common-ancestor-of-deepest-leaves
// @test([3,5,1,6,2,0,8,null,null,7,4])=[2,7,4]
// @test([1])=[1]
// @test([0,1,3,null,2])=[2]
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

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    let ancestor: TreeNode | null = null
    let maxDepth = 0
    function dfs(node: TreeNode | null, depth: number): number {
        maxDepth = Math.max(maxDepth, depth)
        if (node === null) {
            return depth
        }
        const leftDepth = dfs(node.left, depth + 1),
        rightDepth = dfs(node.right, depth + 1)
        if (leftDepth === maxDepth && maxDepth === rightDepth) {
            // this means this current node, has all deepest leaves, so set ancestor
            ancestor = node;
        }
        return Math.max(leftDepth, rightDepth)
    }
    dfs(root, 0)
    return ancestor
};