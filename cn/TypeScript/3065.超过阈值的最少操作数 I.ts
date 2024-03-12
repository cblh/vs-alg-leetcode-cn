// @algorithm @lc id=3331 lang=typescript 
// @title minimum-operations-to-exceed-threshold-value-i
// @test([2,11,10,1,3],10)=3
// @test([1,1,2,4,9],1)=0
// @test([1,1,2,4,9],9)=4
function minOperations(nums: number[], k: number): number {
    let ans = 0
    for (const num of nums) {
        if (num < k) {
            ans++
        }
    }
    return ans
};