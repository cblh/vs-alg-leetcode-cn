// @algorithm @lc id=3338 lang=typescript 
// @title count-submatrices-with-top-left-element-and-sum-less-than-k
// @test([[7,6,3],[6,6,1]],18)=4
// @test([[7,2,9],[1,5,0],[2,6,6]],20)=6
function countSubmatrices(grid: number[][], k: number): number {
    const n = grid.length,
    m = grid[0].length
    let ans = 0
    const prefixSum: number[][] = Array.from({ length: n + 1 }).fill(0).map(() => Array.from({ length: m + 1 }).fill(0)) as number[][]
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1] + grid[i - 1][j - 1]
            if (prefixSum[i][j] <= k) {
                ++ans;
            }
        }
    }
    
    return ans
};
