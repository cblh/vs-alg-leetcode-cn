// @algorithm @lc id=173 lang=typescript 
// @title binary-search-tree-iterator
class BSTIterator {
    vals: number[]
    index: number
    constructor(root: TreeNode | null) {
        this.index = 0
        this.vals = []
        this.dfs(root)
    }

    dfs(root: TreeNode | null) {
        if (root === null) {
            return
        }
        this.dfs(root.left)
        this.vals.push(root.val)
        this.dfs(root.right)
    }
    next(): number {
        return this.vals[this.index++]
    }

    hasNext(): boolean {
        return this.index < this.vals.length
    }
}