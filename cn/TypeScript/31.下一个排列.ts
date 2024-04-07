// @algorithm @lc id=31 lang=typescript 
// @title next-permutation
// @test([1,2,3])=[1,3,2]
// @test([3,2,1])=[1,2,3]
// @test([1,1,5])=[1,5,1]
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const n = nums.length
    let i = n - 2
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }
    if (i >= 0) {
        for (let j = n - 1; j > i; j--) {
            if (nums[j] > nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                break
            }
        }
    }
    for (let j = n - 1; j > i; j--, i++) {
        [nums[i + 1], nums[j]] = [nums[j], nums[i + 1]]
    }
};