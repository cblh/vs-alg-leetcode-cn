// @algorithm @lc id=1615 lang=typescript 
// @title range-sum-of-sorted-subarray-sums
// @test([1,2,3,4],4,1,5)=13
// @test([1,2,3,4],4,3,4)=6
// @test([1,2,3,4],4,1,10)=50
function rangeSum(nums: number[], n: number, left: number, right: number): number {
    const preSum = [0]
    for (let i = 0; i < n; i++) {
        const num = nums[i]
        preSum[i + 1] = preSum[i] + num 
    }
    const subArrSum: number[] = []
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n + 1; j++) {
            subArrSum.push(preSum[j] - preSum[i]) 
        }
    }
    subArrSum.sort((x, y) => x - y)
    const result = subArrSum.slice(left - 1, right).reduce((x, y) => x + y)
    return result % (10e9 + 7)
};