// @algorithm @lc id=875 lang=typescript 
// @title longest-mountain-in-array
// @test([2,1,4,7,3,2,5])=5
// @test([2,2,2])=0
// @test([3,2])=0
function longestMountain(arr: number[]): number {
    const n = arr.length
    const dp = Array.from({ length: n }, () => [0, 0])
    for (let i = 1; i < n; i++) {
        if (arr[i - 1] < arr[i]) {
            dp[i][0] = dp[i - 1][0] + 1
        } else if (arr[i - 1] > arr[i]) {
            dp[i][1] = dp[i - 1][1] + 1
        }
    }
    let ans = 0
    for (let i = 1; i < n; i++) {
        ans = Math.max(ans, dp[i][1] !== 0 && dp[i - dp[i][1]][0] !== 0 ? dp[i][1] + dp[i - dp[i][1]][0] + 1 : 0)
    }
    console.log(dp)

    return ans
};