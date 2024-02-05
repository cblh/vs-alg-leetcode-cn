// @algorithm @lc id=198 lang=typescript 
// @title house-robber
// @test([1,2,3,1])=4
// @test([2,7,9,3,1])=12
function rob(nums: number[]): number {
    const dp = new Array(nums.length).fill(0),
    len = nums.length
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2]+ nums[i], dp[i - 1])
    }
    return dp[len - 1]
};