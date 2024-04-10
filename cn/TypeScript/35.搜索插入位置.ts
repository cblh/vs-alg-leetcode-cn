// @algorithm @lc id=35 lang=typescript 
// @title search-insert-position
// @test([1,3,5,6],5)=2
// @test([1,3,5,6],2)=1
// @test([1,3,5,6],7)=4
function searchInsert(nums: number[], target: number): number {
    let left = 0,
        right = nums.length
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        const pivot = nums[mid]
        if (pivot >= target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return right
};