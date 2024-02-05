// @algorithm @lc id=309 lang=typescript 
// @title best-time-to-buy-and-sell-stock-with-cooldown
// @test([1,2,3,0,2])=3
// @test([1])=0

function maxProfit(prices: number[]): number {
    const len = prices.length,
    dp = new Array(len).fill(0).map(() => new Array(3).fill(0))

    dp[0][0] = -prices[0]
    dp[0][1] = 0
    dp[0][2] = 0

    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
        dp[i][2] = dp[i - 1][1]
    }

    return dp[len - 1][1]
};