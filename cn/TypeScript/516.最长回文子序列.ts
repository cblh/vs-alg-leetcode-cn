// @algorithm @lc id=516 lang=typescript 
// @title longest-palindromic-subsequence
// @test("bbbab")=4
// @test("cbbd")=2
function longestPalindromeSubseq(s: string): number {
    const N = s.length,
    dp = new Array(N+1).fill(0).map(() => new Array(N+1).fill(0))
    
    for (let len = 1; len <= N; len++) {
        for (let i = 0; i + len - 1 <= N; i++) {
            const j = i + len - 1
            if (len === 1) {
                dp[i][j] = 1
            } else if(s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
            }
        }
    }
    return dp[0][N - 1]
};