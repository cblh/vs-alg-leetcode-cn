// @algorithm @lc id=3326 lang=typescript 
// @title count-pairs-of-connectable-servers-in-a-weighted-tree-network
// @test([[0,1,1],[1,2,5],[2,3,13],[3,4,9],[4,5,2]],1)=[0,4,6,6,4,0]
// @test([[0,6,3],[6,5,3],[0,3,1],[3,2,7],[3,1,6],[3,4,2]],3)=[2,0,0,0,0,0,2]
function countPairsOfConnectableServers(edges: number[][], signalSpeed: number): number[] {
    const n = edges.length + 1;
    const g: [number, number][][] = Array.from({ length: n }, () => []);
    for (const [a, b, w] of edges) {
        g[a].push([b, w]);
        g[b].push([a, w]);
    }
    const dfs = (a: number, fa: number, ws: number): number => {
        let cnt = ws % signalSpeed === 0 ? 1 : 0;
        for (const [b, w] of g[a]) {
            if (b != fa) {
                cnt += dfs(b, a, ws + w);
            }
        }
        return cnt;
    };
    const ans: number[] = Array(n).fill(0);
    for (let a = 0; a < n; ++a) {
        let s = 0;
        for (const [b, w] of g[a]) {
            const t = dfs(b, a, w);
            ans[a] += s * t;
            s += t;
        }
    }
    return ans;
}