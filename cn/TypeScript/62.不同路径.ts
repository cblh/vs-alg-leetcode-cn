// @algorithm @lc id=62 lang=typescript 
// @title unique-paths
// @test(3,7)=28
// @test(3,2)=3
function uniquePaths(m: number, n: number): number {
    const dp = new Array(n).fill(1)
    for (let i = 1; i < m ;i++) {
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j - 1] + dp[j]
        }
    }
    return dp[n - 1]
};