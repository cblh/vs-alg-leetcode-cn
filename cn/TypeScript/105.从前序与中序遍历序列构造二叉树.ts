// @algorithm @lc id=105 lang=typescript 
// @title construct-binary-tree-from-preorder-and-inorder-traversal
// @test([3,9,20,15,7],[9,3,15,20,7])=[3,9,20,null,null,15,7]
// @test([-1],[-1])=[-1]

//  class TreeNode {
//      val: number
//      left: TreeNode | null
//      right: TreeNode | null
//      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.left = (left===undefined ? null : left)
//          this.right = (right===undefined ? null : right)
//      }
//  }


function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (inorder.length === 0) {
        return null
    }
    const value = preorder.shift()!
    const index = inorder.findIndex(item => item === value),
    treeLeft = inorder.slice(0, index),
    treeRight = inorder.slice(index + 1)
    const tree = new TreeNode(value)
    tree.left = buildTree(preorder, treeLeft)
    tree.right = buildTree(preorder, treeRight)
    return tree
};