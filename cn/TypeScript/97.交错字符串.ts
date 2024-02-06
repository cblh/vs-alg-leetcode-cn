// @algorithm @lc id=97 lang=typescript 
// @title interleaving-string
// @test("aabcc","dbbca","aadbbcbcac")=true
// @test("aabcc","dbbca","aadbbbaccc")=false
// @test("","","")=true
function isInterleave(s1: string, s2: string, s3: string): boolean {
    const m = s1.length,
    n = s2.length,
    dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false))
    if ( m === 0 && n === 0 && s3.length === 0) {
        return true
    }
    if (n + m !== s3.length) {
        return false
    }
    dp[0][0] = true
    for (let i = 1; i <= m && dp[i - 1][0]; i++) dp[i][0] = s1[i - 1] === s3[i - 1];
    for (let i = 1; i <= n && dp[0][i - 1]; i++) dp[0][i] = s2[i - 1] === s3[i - 1];

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j] === true) {
                dp[i][j] = true
            } else if (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1] === true) {
                dp[i][j] = true
            } else {
                dp[i][j] = false
            }
        }
    }
    return dp[m][n]
};