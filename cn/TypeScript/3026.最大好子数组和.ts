// @algorithm @lc id=3265 lang=typescript 
// @title maximum-good-subarray-sum
// @test([1,2,3,4,5,6],1)=11
// @test([-1,3,2,4,5],3)=11
// @test([-1,-2,-3,-4],2)=-6
function maximumSubarraySum(nums: number[], k: number): number {
    const p: Map<number, number> = new Map()
    p.set(nums[0], 0)
    const n = nums.length
    let s = 0
    let ans = -Infinity
    for (let i = 0; i < n; i++) {
        s += nums[i]
        if (p.has(nums[i] + k)) {
            ans = Math.max(ans, s - p.get(nums[i] + k)!)
        }
        if (p.has(nums[i] - k)) {
            ans = Math.max(ans, s - p.get(nums[i] - k)!)
        }
        if (i + 1 < n && (!p.has(nums[i + 1]) || p.get(nums[i + 1])! > s)) {
            p.set(nums[i + 1], s)
        }
    }
    return ans === -Infinity ? 0 : ans
}