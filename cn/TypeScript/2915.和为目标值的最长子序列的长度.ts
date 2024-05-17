// @algorithm @lc id=3106 lang=typescript 
// @title length-of-the-longest-subsequence-that-sums-to-target
// @test([1,2,3,4,5],9)=3
// @test([4,1,3,2,1,5],7)=4
// @test([1,1,5,4,5],3)=-1
function lengthOfLongestSubsequence(nums: number[], target: number): number {
    const n = nums.length
    const dp: number[][] = Array.from({ length: n + 1 }, () => Array.from({ length: target + 1 }, () => -Infinity))
    dp[0][0] = 0
    for (let i = 1; i <= n; i++) {
        const x = nums[i - 1]
        for (let j = 0; j <= target; j++) {
            dp[i][j] = dp[i - 1][j]
            if (j >= x) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - x] + 1)
            }
        }
    }
    return dp[n][target] <= 0 ? -1 : dp[n][target]
};