// @algorithm @lc id=123 lang=typescript 
// @title best-time-to-buy-and-sell-stock-iii
// @test([3,3,5,0,0,3,1,4])=6
// @test([1,2,3,4,5])=4
// @test([7,6,4,3,1])=0
function maxProfit(prices: number[]): number {
    const len = prices.length,
    dp: number[][] = new Array(len + 1).fill(new Array(4).fill(0))
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    dp[0][2] = -prices[0]
    dp[0][3] = 0
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i])
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i])
    }
    return Math.max(...dp[len - 1])
};