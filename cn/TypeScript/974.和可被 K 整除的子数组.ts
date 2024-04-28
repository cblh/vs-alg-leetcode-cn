// @algorithm @lc id=1016 lang=typescript 
// @title subarray-sums-divisible-by-k
// @test([4,5,0,-2,-3,1],5)=7
// @test([5],9)=0
function subarraysDivByK(nums: number[], k: number): number {
    let ans = 0,
        prefixSum = 0
    const counter = new Map()
    counter.set(0, 1)
    for (const num of nums) {
        prefixSum += num
        const t = (prefixSum % k + k) % k
        ans += counter.get(t) ?? 0
        counter.set(t, (counter.get(t) ?? 0) + 1)
    }
    return ans
};