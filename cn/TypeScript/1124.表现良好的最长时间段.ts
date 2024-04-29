// @algorithm @lc id=1219 lang=typescript 
// @title longest-well-performing-interval
// @test([9,9,6,0,6,6,9])=3
// @test([6,6,6])=0
function longestWPI(hours: number[]): number {
    let s = 0
    let ans = 0
    const n = hours.length
    const counter = new Map()
    for (let i = 0; i < n; i++) {
        const hour = hours[i]
        s += hour > 8 ? 1 : - 1
        if (s > 0) {
            ans = i + 1
        } else if (counter.has(s - 1)) {
            ans = Math.max(ans, i - counter.get(s - 1))
        }
        if (!counter.has(s)) {
            counter.set(s, i)
        }
    }
    return ans
};