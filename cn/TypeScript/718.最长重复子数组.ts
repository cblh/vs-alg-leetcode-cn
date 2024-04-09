// @algorithm @lc id=718 lang=typescript 
// @title maximum-length-of-repeated-subarray
// @test([1,2,3,2,1],[3,2,1,4,7])=3
// @test([0,0,0,0,0],[0,0,0,0,0])=5
function findLength(nums1: number[], nums2: number[]): number {
    const n = nums1.length,
        m = nums2.length
    const dp: number[][] = Array.from({ length: n + 1 }, () => {
        return Array.from({ length: m + 1 }, () => 0)
    })
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }
        }
    }
    return Math.max(...dp.flat(2))
};