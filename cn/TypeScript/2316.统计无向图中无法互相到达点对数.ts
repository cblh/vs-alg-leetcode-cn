// @algorithm @lc id=2403 lang=typescript 
// @title count-unreachable-pairs-of-nodes-in-an-undirected-graph
// @test(3,[[0,1],[0,2],[1,2]])=0
// @test(7,[[0,2],[0,5],[2,4],[1,6],[5,4]])=14
function countPairs(n: number, edges: number[][]): number {
    const g: number[][] = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        g[a].push(b)
        g[b].push(a)
    }
    const vis: boolean[] = new Array(n).fill(false)
    function dfs(n: number): number {
        if (vis[n]) {
            return 0
        }
        vis[n] = true
        let count = 1
        for (const it of g[n]) {
            count += dfs(it)
        }
        return count
    }
    let ans = 0
    for (let i = 0; i < n; i++) {
        const t = dfs(i)
        ans += t * (n - t)
    }
    return ans / 2
}
