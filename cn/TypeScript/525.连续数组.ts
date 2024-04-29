// @algorithm @lc id=525 lang=typescript 
// @title contiguous-array
// @test([0,1])=2
// @test([0,1,0])=2
function findMaxLength(nums: number[]): number {
    const counter = new Map()
    counter.set(0, -1)
    let s = 0 //统计 1 比 0 多的个数
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        s += nums[i] === 0 ? -1 : 1
        if (counter.has(s)) {
            ans = Math.max(ans, i - counter.get(s))
        } else {
            counter.set(s, i)
        }
    }
    return ans
};