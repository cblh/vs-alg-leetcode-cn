// @algorithm @lc id=213 lang=typescript 
// @title house-robber-ii
// @test([2,3,2])=3
// @test([1,2,3,1])=4
// @test([1,2,3])=3
function rob(nums: number[]): number {
    if (nums.length <= 2) {
        return Math.max(...nums)
    }
    return Math.max(baseRob(nums.slice(0, nums.length - 1)), baseRob(nums.slice(1, nums.length)))
};
function baseRob(nums: number[]): number {
    const dp = new Array(nums.length).fill(0),
    len = nums.length
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2]+ nums[i], dp[i - 1])
    }
    return dp[len - 1]
};
