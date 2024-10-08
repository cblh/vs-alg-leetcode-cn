// @algorithm @lc id=122 lang=typescript 
// @title best-time-to-buy-and-sell-stock-ii
// @test([7,1,5,3,6,4])=7
// @test([1,2,3,4,5])=4
// @test([7,6,4,3,1])=0
// @test([3,3,5,0,0,3,1,4])=8
function maxProfit(prices: number[]): number {
    const len = prices.length,
    dp: number[][] = Array.from({ length: len + 1 }, () => {
        return new Array(2).fill(0)
    })
    dp[0][0] = -prices[0]
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }
    return Math.max(...dp[len - 1])
};