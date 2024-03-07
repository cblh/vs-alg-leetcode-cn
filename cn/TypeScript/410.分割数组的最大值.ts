// @algorithm @lc id=410 lang=typescript 
// @title split-array-largest-sum
// @test([7,2,5,10,8],2)=18
// @test([1,2,3,4,5],2)=9
function splitArray(nums: number[], K: number): number { 
    const n = nums.length,
    dp = new Array(n + 1).fill(0).map(() => new Array(K + 1).fill(Infinity))
    const prefix = new Array(n + 1).fill(0)
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i]
    }
    dp[0][0] = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= Math.min(i, K); j++) {
            for (let k = 0; k < i; k++) {
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], prefix[i] - prefix[k]))
            }
        }
    }
    return dp[n][K]
}