// @algorithm @lc id=3321 lang=typescript 
// @title type-of-triangle
// @test([3,3,3])="equilateral"
// @test([3,4,5])="scalene"
function triangleType(nums: number[]): string {
    nums.sort((a, b) => a - b)
    if (nums[0] === nums[2]) {
        return 'equilateral'
    }
    if (nums[0] + nums[1] <= nums[2]) {
        return 'none'
    }
    if (nums[0] === nums[1] || nums[2] === nums[1]) {
        return 'isosceles'
    }
    return 'scalene'
};