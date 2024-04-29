// @algorithm @lc id=523 lang=typescript 
// @title continuous-subarray-sum
// @test([23,2,4,6,7],6)=true
// @test([23,2,6,4,7],6)=true
// @test([23,2,6,4,7],13)=false
function checkSubarraySum(nums: number[], k: number): boolean {
    const counter = new Map()
    counter.set(0, -1)
    let  prefixSum = 0
    const n = nums.length
    for (let i = 0; i < n; i++) {
        const num = nums[i]
        prefixSum += num
        const t = prefixSum % k
        if (counter.has(t) && i - counter.get(t) >= 2) {
            return true
        }
        if (!counter.has(t)) {
            counter.set(t, i)
        }
    }
    return false
};