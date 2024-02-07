// @algorithm @lc id=375 lang=typescript 
// @title guess-number-higher-or-lower-ii
// @test(10)=16
// @test(1)=0
// @test(2)=1
function getMoneyAmount(n: number): number {
    const dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0))
    //定义基础值dp[i][i]
    for (let i = 0; i <= n; i++) {
        dp[i][i] = 0;
    }

    for (let len = 2; len <= n; len++) {
        for (let i = 1; i + len - 1 <= n; i++) {
            const j = i + len - 1
            dp[i][j] = 0x3f3f3f3f;
            for (let k = i ; k <= j; k++) {
                dp[i][j] = Math.min(dp[i][j], k + Math.max(dp[i][k - 1], dp[k + 1][j]))
            }
        }
    }

    return dp[1][n]
};