// @algorithm @lc id=416 lang=typescript 
// @title partition-equal-subset-sum
// @test([1,5,11,5])=true
// @test([1,2,5])=false
function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((x, y) => x + y)
    if (sum % 2 !== 0) {
        return false
    }
    const target = sum / 2
    const dp = new Array(target + 1).fill(false)
    dp[0] = true
    
    for (const num of nums) {
        for (let i = target; i >= num ; i--) {
            dp[i] = dp[i] || dp[i - num]
        }
    }
    return dp[target]
};