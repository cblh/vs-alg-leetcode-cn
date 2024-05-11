// @algorithm @lc id=3225 lang=typescript 
// @title length-of-longest-subarray-with-at-most-k-frequency
// @test([1,2,3,1,2,3,1,2],2)=6
// @test([1,2,1,2,1,2,1,2],1)=2
// @test([5,5,5,5,5,5,5],4)=4
function maxSubarrayLength(nums: number[], k: number): number {
    let left = 0,
        right = 0
    const n = nums.length
    const counter = new Map()
    let ans = 0
    while (right < n) {
        const addNum = nums[right]
        counter.set(addNum, (counter.get(addNum) ?? 0) + 1)
        while (counter.get(addNum) > k) {
            const toDelete = nums[left]
            counter.set(toDelete, (counter.get(toDelete) ?? 0) - 1)
            left++
        }
        right++
        ans = Math.max(ans, right - left)
    }
    return ans
};