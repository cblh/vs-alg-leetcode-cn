// @algorithm @lc id=112 lang=typescript 
// @title path-sum
// @test([5,4,8,11,null,13,4,7,2,null,null,null,1],22)=true
// @test([1,2,3],5)=false
// @test([],0)=false
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) {
        return false
    }
    const { val, left, right } = root
    if (left === null && right === null) {
        return targetSum - val === 0
    }
    return hasPathSum(left, targetSum - val) || hasPathSum(right, targetSum - val)
};