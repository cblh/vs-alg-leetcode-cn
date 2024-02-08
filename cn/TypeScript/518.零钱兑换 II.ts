// @algorithm @lc id=518 lang=typescript 
// @title coin-change-ii
// @test(5,[1,2,5])=4
// @test(3,[2])=0
// @test(10,[10])=1
function change(amount: number, coins: number[]): number {
    const n = coins.length
    const dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < n; i++) {
        const coin = coins[i]
        for (let j = 0; j <= amount; j++) {
            if (j - coin >= 0) {
                dp[j] += dp[j - coin]
            }
        }
    }

    return dp[amount]
};