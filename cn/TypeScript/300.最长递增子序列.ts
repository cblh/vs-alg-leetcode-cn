// @algorithm @lc id=300 lang=typescript 
// @title longest-increasing-subsequence
// @test([10,9,2,5,3,7,101,18])=4
// @test([0,1,0,3,2,3])=4
// @test([7,7,7,7,7,7,7])=1
function lengthOfLIS(nums: number[]): number {
    const len = nums.length
    const dp = new Array(len).fill(1)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return Math.max(...dp)
};