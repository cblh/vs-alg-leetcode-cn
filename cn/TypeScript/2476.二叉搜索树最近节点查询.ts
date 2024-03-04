// @algorithm @lc id=2567 lang=typescript 
// @title closest-nodes-queries-in-a-binary-search-tree
// @test([6,2,13,1,4,9,15,null,null,null,null,null,null,14],[2,5,16])=[[2,2],[4,6],[15,-1]]
// @test([4,null,9],[3])=[[-1,4]]
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

function closestNodes(root: TreeNode | null, queries: number[]): number[][] {
    const nums = [];

    const inorderTraversal = (node) => {
        if(!node) {
            return;
        }

        if(node.left) {
            inorderTraversal(node.left);
        }

        nums.push(node.val);

        if(node.right) {
            inorderTraversal(node.right);
        }
    }

    inorderTraversal(root);

    const resultArr = new Array(queries.length);

    for(let i = 0; i < queries.length; i++) {
        const targetNum = queries[i];

        // binary search
        let leftIdx = 0;
        let rightIdx = nums.length - 1;
        let lastMaxMinValue = -1; // >>>> 5
        let lastMinMaxValue = -1; // 5 <<<<

        while(leftIdx <= rightIdx) {
            const midIdx = Math.floor((leftIdx + rightIdx) / 2);

            if(nums[midIdx] === targetNum) {
                lastMaxMinValue = targetNum
                lastMinMaxValue = targetNum
                break;
            } else if(nums[midIdx] < targetNum) {
                leftIdx = midIdx + 1;
                lastMaxMinValue = nums[midIdx];
            } else {
                rightIdx = midIdx - 1;
                lastMinMaxValue = nums[midIdx];
            }

        } 


        resultArr[i] = [lastMaxMinValue, lastMinMaxValue];
    }

    return resultArr;
};