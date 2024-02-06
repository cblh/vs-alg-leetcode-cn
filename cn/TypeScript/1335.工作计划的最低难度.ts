// @algorithm @lc id=1457 lang=typescript 
// @title minimum-difficulty-of-a-job-schedule
// @test([6,5,4,3,2,1],2)=7
// @test([9,9,9],4)=-1
// @test([1,1,1],3)=3
// @test([7,1,7,1,7,1],3)=15
function minDifficulty(jobDifficulty: number[], d: number): number {
    const n = jobDifficulty.length,
    dp = new Array(n + 1).fill(0).map(() => new Array(d + 1).fill(Infinity))
    if (n < d) {
        return -1
    }
    dp[0][0] = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= Math.min(i, d); j++) {
            let mx = 0
            for (let k = i; k >= j; k--) {
                mx = Math.max(mx, jobDifficulty[k - 1])
                dp[i][j] = Math.min(dp[i][j], dp[k - 1][j - 1] + mx)
            }
        }
    }

    return dp[n][d]
};