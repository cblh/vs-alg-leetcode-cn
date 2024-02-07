// @algorithm @lc id=312 lang=typescript 
// @title burst-balloons
// @test([3,1,5,8])=167
// @test([1,5])=10
function maxCoins(nums: number[]): number {
    nums.unshift(1)
    nums.push(1)
    const N = nums.length,
    dp = new Array(N).fill(0).map(() => new Array(N).fill(0))
    for (let len = 3; len <= N; len++) {
        for (let i = 0; i + len - 1 <= N - 1; i++) {
            const j = i + len - 1
            for (let k = i + 1; k <= j - 1; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + nums[i] * nums[k] * nums[j] + dp[k][j])
            }
        }
    }

    return dp[0][N - 1]
};