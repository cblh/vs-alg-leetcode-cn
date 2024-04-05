// @algorithm @lc id=153 lang=typescript 
// @title find-minimum-in-rotated-sorted-array
// @test([3,4,5,1,2])=1
// @test([4,5,6,7,0,1,2])=0
// @test([11,13,15,17])=11
function findMin(nums: number[]): number {
    return binarySearch(nums, 0, nums.length - 1)
};
function binarySearch(nums: number[], left: number, right: number) {
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        const pivot = nums[mid]
        if (pivot > nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return nums[left]
}