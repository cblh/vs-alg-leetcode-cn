// @algorithm @lc id=53 lang=typescript 
// @title maximum-subarray
// @test([-2,1,-3,4,-1,2,1,-5,4])=6
// @test([1])=1
// @test([5,4,-1,7,8])=23
function maxSubArray(nums: number[]): number {
    let pre = 0,
    maxAns = nums[0]
    nums.forEach((item) => {
        pre = pre > 0 ? pre + item : item
        maxAns = Math.max(maxAns, pre)
    })
    return maxAns
};