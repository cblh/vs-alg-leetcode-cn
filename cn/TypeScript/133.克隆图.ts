// @algorithm @lc id=133 lang=typescript 
// @title clone-graph
// @test([[2,4],[1,3],[2,4],[1,3]])=[[2,4],[1,3],[2,4],[1,3]]
// @test([[]])=[[]]
// @test([])=[]
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */
function cloneGraph(node: Node | null): Node | null {
	const visited = new Map()
    function dfs(node: Node | null): Node | null {
        if (node === null) {
            return node
        }
        if (visited.has(node)) {
            return visited.get(node)
        }
        const cloneNode = new Node(node.val)
        visited.set(node, cloneNode)
        node.neighbors.forEach(neighbor => cloneNode.neighbors.push(dfs(neighbor)))
        return cloneNode
    }
    return dfs(node)
};


