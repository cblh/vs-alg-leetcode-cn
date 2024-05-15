// @algorithm @lc id=2915 lang=typescript 
// @title count-of-interesting-subarrays
// @test([3,2,4],2,1)=3
// @test([3,1,9,6],3,0)=2
function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    const n = nums.length
    const calc = nums.map(num => num % modulo == k)
    let pre = 0
    let ans = 0
    const map = new Map()
    map.set(0, 1)
    for (let i = 0; i < n; i++) {
        const res = calc[i]
        pre = pre + (res ? 1 : 0)
        ans += map.get((pre - k  + modulo) % modulo) || 0
        map.set(pre % modulo, (map.get(pre % modulo) ?? 0) + 1)
    }
    return ans
};