// @algorithm @lc id=1130 lang=typescript 
// @title last-stone-weight-ii
// @test([2,7,4,1,8,1])=1
// @test([31,26,33,21,40])=5
function lastStoneWeightII(stones: number[]): number {
    let sum = 0
    for (const stone of stones) {
        sum += stone
    }
    let target = Math.floor(sum / 2)
    const dp = new Array(target + 1).fill(0)
    for (const stone of stones) {
        for (let i = target; i >= stone; i--) {
            dp[i] = Math.max(dp[i], dp[i - stone] + stone)
        }
    }
    return sum - dp[target] * 2
};