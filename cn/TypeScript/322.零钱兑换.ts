// @algorithm @lc id=322 lang=typescript 
// @title coin-change
// @test([1,2,5],11)=3
// @test([2],3)=-1
// @test([1],0)=0
function coinChange(coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i - coin] + 1, dp[i])
            }
        }
    }
    return dp[amount] === Infinity ? - 1 : dp[amount]
};