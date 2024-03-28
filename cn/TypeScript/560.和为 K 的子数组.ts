// @algorithm @lc id=560 lang=typescript 
// @title subarray-sum-equals-k
// @test([1,1,1],2)=2
// @test([1,2,3],3)=2
function subarraySum(nums: number[], k: number): number {
    let ans = 0,
        prefixSum = 0
    const counter = new Map()
    counter.set(0, 1)
    for (const num of nums) {
        prefixSum += num
        ans += counter.get(prefixSum - k) || 0
        counter.set(prefixSum, (counter.get(prefixSum) || 0) + 1)
    }
    return ans
}