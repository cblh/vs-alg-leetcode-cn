// @algorithm @lc id=831 lang=typescript 
// @title largest-sum-of-averages
// @test([9,1,2,3,9],3)=20.00000
// @test([1,2,3,4,5,6,7],4)=20.50000
function largestSumOfAverages(nums: number[], K: number): number {
    const n = nums.length,
    dp = new Array(n + 1).fill(0).map(() => new Array(K + 1).fill(0))
    const prefix = new Array(n + 1).fill(0)
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i]
    }
    for (let i = 1; i <= n; i++) {
        dp[i][1] = prefix[i] / i
    }
    for (let i = 1; i <= n; i++) {
        for (let k = 2; k <= Math.min(K, i); k++) {
            for (let j = 2; j <= i; j++) {
                dp[i][k] = Math.max(dp[i][k], dp[j - 1][k - 1] +  (prefix[i] - prefix[j - 1]) / (i - j + 1))
            }
        }
    }

    return Math.max(...dp[n])
};