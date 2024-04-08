// @algorithm @lc id=189 lang=typescript 
// @title rotate-array
// @test([1,2,3,4,5,6,7],3)=[5,6,7,1,2,3,4]
// @test([-1,-100,3,99],2)=[3,99,-1,-100]
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    // n - k, n - k + 1 ... 0, n - k - 1
    const n = nums.length
    k %= n
    function reverse(i: number, j: number) {
        for (; i < j; i++, j--) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    reverse(0, n - 1)
    reverse(0, k - 1)
    reverse(k, n - 1)
};