// @algorithm @lc id=3246 lang=typescript 
// @title check-if-bitwise-or-has-trailing-zeros
// @test([1,2,3,4,5])=true
// @test([2,4,8,16])=true
// @test([1,3,5,7,9])=false
function hasTrailingZeros(nums: number[]): boolean {
    let ans = 0
    for (const x of nums) {
        if ((x & 1) === 0) {
            ans++
        }
    }
    return ans >= 2
};