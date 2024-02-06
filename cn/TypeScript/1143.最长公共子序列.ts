// @algorithm @lc id=1250 lang=typescript 
// @title longest-common-subsequence
// @test("abcde","ace")=3
// @test("abc","abc")=3
// @test("abc","def")=0
function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length,
    n = text2.length,
    dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[m][n]
};