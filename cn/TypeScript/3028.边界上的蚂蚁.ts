// @algorithm @lc id=3311 lang=typescript 
// @title ant-on-the-boundary
// @test([2,3,-5])=1
// @test([3,2,-3,-4])=0
function returnToBoundaryCount(nums: number[]): number {
    let ans = 0
    let distance = 0
    for (const num of nums) {
        distance += num
        if (distance === 0) {
            ans++
        }
    }
    return ans
};