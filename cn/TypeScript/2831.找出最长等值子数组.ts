// @algorithm @lc id=2832 lang=typescript 
// @title find-the-longest-equal-subarray
// @test([1,3,2,3,1,3],3)=3
// @test([1,1,2,2,1,1],2)=4
// @test([1,2,1], 0)=1
function longestEqualSubarray(nums: number[], k: number): number {
    const n = nums.length
    let left = 0,
        right = 0
    const counter = new Map()
    let winMaxCount = -Infinity
    while (right < n) {
        const num = nums[right]
        counter.set(num, (counter.get(num) ?? 0) + 1)
        if (counter.get(num) > winMaxCount) {
            winMaxCount = counter.get(num)
        }
        if (right - left + 1 - winMaxCount > k) {
            const toDelete = nums[left]
            counter.set(toDelete, counter.get(toDelete) - 1)
            left++
        }
        right++
    }
    return winMaxCount
};