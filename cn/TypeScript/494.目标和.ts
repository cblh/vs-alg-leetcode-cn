// @algorithm @lc id=494 lang=typescript 
// @title target-sum
// @test([1,1,1,1,1],3)=5
// @test([1],1)=1
function findTargetSumWays(nums: number[], target: number): number {
    for (const x of nums) target += x;
        if (target < 0 || target % 2 == 1) return 0
    target /= 2

    const len = nums.length,
    dp = new Array(len + 1).fill(0).map(() => new Array(target + 1).fill(0))
    dp[0][0] = 1
    for (let i = 0; i < len; i++) {
        for (let s = 0; s <= target; s++ ) {
            if (s < nums[i]) {
                dp[i + 1][s] = dp[i][s] 
            } else {
                dp[i + 1][s] =  dp[i][s] + dp[i][s - nums[i]]
            }
        }
    }
    return dp[len][target]
};