// @algorithm @lc id=2855 lang=typescript 
// @title maximum-number-of-jumps-to-reach-the-last-index
// @test([1,3,6,4,1,2],2)=3
// @test([1,3,6,4,1,2],3)=5
// @test([1,3,6,4,1,2],0)=-1
// @test([0,2,1,3], 1)=-1
function maximumJumps(nums: number[], target: number): number {
    const n = nums.length
    const dp = Array.from({ length: n + 1 }, () => -Infinity)
    dp[0] = 0
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (Math.abs(nums[j] - nums[i]) <= target) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return dp[n - 1] === -Infinity ? -1 : dp[n - 1]
};