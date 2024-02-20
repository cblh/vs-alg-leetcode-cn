// @algorithm @lc id=235 lang=typescript 
// @title lowest-common-ancestor-of-a-binary-search-tree
// @test([6,2,8,0,4,7,9,null,null,3,5],2,8)=6
// @test([6,2,8,0,4,7,9,null,null,3,5],2,4)=2
// @test([2,1],2,1)=2
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	function dfs(node: TreeNode | null) {
        if (node === null) {
            return node
        }
        if (node === p || node === q) {
            return node
        }

        const left = dfs(node.left),
        right = dfs(node.right)
        if (left === p && right === q) {
            return node
        } else if (left === q && right === p) {
            return node
        }
        if(left && right === null){
            return left
        }
        if(left === null && right ){
            return right
        }

        return null
    }

    return dfs(root)
};