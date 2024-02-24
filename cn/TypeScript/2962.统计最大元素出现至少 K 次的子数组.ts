// @algorithm @lc id=3213 lang=typescript 
// @title count-subarrays-where-max-element-appears-at-least-k-times
// @test([1,3,2,3,3],2)=6
// @test([1,4,2,1],3)=0
function countSubarrays(nums: number[], k: number): number {
    const max = Math.max(...nums),
          n = nums.length
    let right = 0
    let windowCount = 0
    let ans = 0
    for (const x of nums) {
        for (; right < n && windowCount < k; right++) {
            windowCount += nums[right] === max ? 1 : 0
        }
        if (windowCount < k) {
            break
        }
        ans += n - right + 1
        windowCount -= x === max ? 1 : 0
    }
    return ans
};