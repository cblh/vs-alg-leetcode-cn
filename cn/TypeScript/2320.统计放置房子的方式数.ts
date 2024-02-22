// @algorithm @lc id=2397 lang=typescript 
// @title count-number-of-ways-to-place-houses
// @test(1)=4
// @test(2)=9
// @test(1000)=9
// 00 -> 00/11/01/10
// 01 -> 00/10 
// 10 -> 00/01
// 11 -> 00
function countHousePlacements(n: number): number {
    const dp = new Array(n + 1).fill(0)
    dp[0] = 1n
    dp[1] = 2n
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % BigInt(10e9 + 7 )
    }
    return (dp[n] * dp[n]) % BigInt(10e9 + 7 )
};