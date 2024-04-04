// @algorithm @lc id=64 lang=typescript 
// @title minimum-path-sum
// @test([[1,3,1],[1,5,1],[4,2,1]])=7
// @test([[1,2,3],[4,5,6]])=12
// @test([[1,2],[1,1]])=3
function minPathSum(grid: number[][]): number {
    const n = grid.length,
        m = grid[0].length
    const dp = new Array(n).fill(0).map(() => new Array(m).fill(0))
    dp[0][0] = grid[0][0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }
    for (let i = 1; i < m; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i]
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    return dp[n - 1][m - 1]
};