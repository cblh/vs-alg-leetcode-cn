// @algorithm @lc id=2856 lang=typescript 
// @title count-complete-subarrays-in-an-array
// @test([1,3,1,2,2])=4
// @test([5,5,5,5])=10
function countCompleteSubarrays(nums: number[]): number {
    let left = 0,
        right = 0
    const n = nums.length
    const win = new Map()
    const count = new Set()
    for (const num of nums) {
        count.add(num)
    }
    let ans = 0
    while(right < n) {
        win.set(nums[right], (win.get(nums[right]) ?? 0) + 1)
        while (win.size === count.size) {
            ans += n - right;
            win.set(nums[left], win.get(nums[left]) - 1)
            if (win.get(nums[left]) === 0) {
                win.delete(nums[left])
            }
            left++
        }
        right++
    }
    return ans
};