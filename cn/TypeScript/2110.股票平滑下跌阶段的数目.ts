// @algorithm @lc id=2233 lang=typescript 
// @title number-of-smooth-descent-periods-of-a-stock
// @test([3,2,1,4])=7
// @test([8,6,7,7])=4
// @test([1])=1
function getDescentPeriods(prices: number[]): number {
    const n = prices.length
    let i = 0
    let ans = 0
    while (i < n) {
        let j = i + 1
        while (j < n && prices[j] - prices[j - 1] === -1) {
            j++
        }
        const cnt = j - i
        ans += Math.floor((1 + cnt) * cnt / 2)
        i = j
    }
    return ans
};