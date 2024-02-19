// @algorithm @lc id=70 lang=typescript 
// @title climbing-stairs
// @test(2)=2
// @test(3)=3
function climbStairs(n: number): number {
    const dp = new Array(n + 1)
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};