// @algorithm @lc id=124 lang=typescript 
// @title binary-tree-maximum-path-sum
// @test([1,2,3])=6
// @test([-10,9,20,null,null,15,7])=42
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

function maxPathSum(root: TreeNode | null): number {
    let ans = -Infinity;
    function dfs(node: TreeNode | null): number{
        if(node===null){
            return 0;
        }

        const left = Math.max(dfs(node.left), 0),
            right = Math.max(dfs(node.right), 0);

        ans = Math.max(ans, left + right + node.val);
        return Math.max(left, right) + node.val;
    }

    dfs(root);
    return ans;
};