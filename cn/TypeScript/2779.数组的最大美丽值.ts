// @algorithm @lc id=2891 lang=typescript 
// @title maximum-beauty-of-an-array-after-applying-operation
// @test([4,6,1,2],2)=3
// @test([1,1,1,1],10)=4
// @test([5,57,46], 15)=2
function maximumBeauty(nums: number[], k: number): number {
    nums.sort((a, b) => a - b)
    let ans  = 0,
    left = 0
    nums.forEach((x, right) => {
        while (x - nums[left] > k * 2) {
            left += 1
        }
        ans = Math.max(ans, right - left + 1)
    })
    return ans
};