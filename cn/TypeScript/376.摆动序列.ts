// @algorithm @lc id=376 lang=typescript 
// @title wiggle-subsequence
// @test([1,7,4,9,2,5])=6
// @test([1,17,5,10,13,15,10,5,16,8])=7
// @test([1,2,3,4,5,6,7,8,9])=2
function wiggleMaxLength(nums: number[]): number {
    const len = nums.length
    const dp = new Array(len).fill(1).map(() => [1, 1])
    for (let i = 1; i < len; i++) {
        if (nums[i] < nums[i - 1]) {
            dp[i][0] = dp[i - 1][1] + 1
        } else {
            dp[i][0] = dp[i - 1][0]
        }

        if (nums[i] > nums[i - 1]) {
            dp[i][1] = dp[i - 1][0] + 1
        } else {
            dp[i][1] = dp[i - 1][1]
        }
    }
    return Math.max(...dp[len - 1])
};