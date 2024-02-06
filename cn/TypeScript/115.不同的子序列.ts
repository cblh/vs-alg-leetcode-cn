// @algorithm @lc id=115 lang=typescript 
// @title distinct-subsequences
// @test("rabbbit","rabbit")=3
// @test("babgbag","bag")=5
function numDistinct(s: string, t: string): number {
    const n = s.length,
    m = t.length,
    dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[n][m]
};