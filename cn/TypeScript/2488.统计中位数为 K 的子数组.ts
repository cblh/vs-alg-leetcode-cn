// @algorithm @lc id=2574 lang=typescript 
// @title count-subarrays-with-median-k
// @test([3,2,1,4,5],4)=3
// @test([2,5,1,4,3,6],1)=3
// @test([2,3,1],3)=1
function countSubarrays(nums: number[], k: number): number {
    const i = nums.indexOf(k)
    let ans = 1
    let x = 0
    const n = nums.length
    const cnt = Array.from({ length: (n << 1) | 1 }, () => 0)
    for (let j = i + 1; j < n; j++) {
        x += nums[j] > k ? 1 : -1
        ans += x >= 0 && x <= 1 ? 1 : 0
        ++cnt[x + n]
    }
    x = 0
    for (let j = i - 1; j >= 0; j--) {
        x += nums[j] > k ? 1 : -1
        ans += x >= 0 && x <= 1 ? 1 : 0
        ans += cnt[-x + n] + cnt[-x + 1 + n]
    }
    return ans
};