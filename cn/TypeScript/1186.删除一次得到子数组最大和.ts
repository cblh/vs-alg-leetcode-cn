// @algorithm @lc id=1288 lang=typescript 
// @title maximum-subarray-sum-with-one-deletion
// @test([1,-2,0,3])=4
// @test([1,-2,-2,3])=3
// @test([-1,-1,-1,-1])=-1
function maximumSum(arr: number[]): number {
    const len = arr.length
    if (len <= 1) {
        return arr[0]
    }
    const dp = new Array(len).fill(0).map(() => [0, 0])
    dp[0][0] = arr[0]
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0] + arr[i], arr[i])
        dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1] + arr[i])
    }
    return Math.max(...dp.slice(1).flat(2))
};