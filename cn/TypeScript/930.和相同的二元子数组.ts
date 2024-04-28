// @algorithm @lc id=966 lang=typescript 
// @title binary-subarrays-with-sum
// @test([1,0,1,0,1],2)=4
// @test([0,0,0,0,0],0)=15
function numSubarraysWithSum(nums: number[], goal: number): number {
    let ans = 0,
        prefixSum = 0
    const counter = new Map()
    counter.set(0, 1)
    for (const num of nums) {
        prefixSum += num
        ans += counter.get(prefixSum - goal) ?? 0
        counter.set(prefixSum, (counter.get(prefixSum) ?? 0) + 1)
    }
    return ans
};