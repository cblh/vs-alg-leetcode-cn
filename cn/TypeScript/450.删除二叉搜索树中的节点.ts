// @algorithm @lc id=450 lang=typescript 
// @title delete-node-in-a-bst
// @test([5,3,6,2,4,null,7],3)=[5,4,6,2,null,null,7]
// @test([5,3,6,2,4,null,7],0)=[5,3,6,2,4,null,7]
// @test([],0)=[]
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root == null) {
        return root;
    }
    const { val, left, right } = root;
    if (val > key) {
        root.left = deleteNode(left, key);
    } else if (val < key) {
        root.right = deleteNode(right, key);
    } else {
        if (left == null && right == null) {
            root = null;
        } else if (left == null || right == null) {
            root = left || right;
        } else {
            if (right.left == null) {
                right.left = left;
                root = right;
            } else {
                let minPreNode = right;
                while (minPreNode.left.left != null) {
                    minPreNode = minPreNode.left;
                }
                const minVal = minPreNode.left.val;
                root.val = minVal;
                minPreNode.left = deleteNode(minPreNode.left, minVal);
            }
        }
    }
    return root;
}

const root1 = {
    val: 5,
    left: {
        val: 3,
        left: {
            val: 2
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 6,
        right: {
            val: 7
        }
    }
}
// deleteNode(root1, 3)
// [5,3,6,2,4,null,7]