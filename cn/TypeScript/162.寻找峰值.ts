// @algorithm @lc id=162 lang=typescript 
// @title find-peak-element
// @test([1,2,3,1])=2
// @test([1,2,1,3,5,6,4])=5
function findPeakElement(nums: number[]): number {
    const n = nums.length
    let [left, right] = [0, n - 1]
    while (left < right) {
        const mid = (left + right) >> 1
        if (nums[mid] > nums[mid + 1]) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};