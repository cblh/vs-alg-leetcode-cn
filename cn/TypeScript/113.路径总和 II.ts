// @algorithm @lc id=113 lang=typescript 
// @title path-sum-ii
// @test([5,4,8,11,null,13,4,7,2,null,null,5,1],22)=[[5,4,11,2],[5,8,4,5]]
// @test([1,2,3],5)=[]
// @test([1,2],0)=[]
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const ans: number[][] = []
    const path: number[] = []
    function dfs(node: TreeNode | null, toReduce: number) {
        if (node === null) {
            return
        }
        toReduce -= node.val
        path.push(node.val)
        if (node.left === null && node.right === null && toReduce === 0) {
            ans.push([...path])
        }
        dfs(node.left, toReduce)
        dfs(node.right, toReduce)
        path.pop()
    }
    dfs(root, targetSum)
    return ans
};