// @algorithm @lc id=2511 lang=typescript 
// @title partition-string-into-substrings-with-values-at-most-k
// @test("165462",60)=4
// @test("238182",5)=-1
// @test("1",1)=1
function minimumPartition(s: string, k: number): number {
    const n = s.length
    const dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (isGoodPartition(s, j, i, k)) {
                dp[i] = Math.min(dp[i], dp[j] + 1)
            } else {
                break
            }
        }
    }
    return dp[n] === Infinity ? -1 : dp[n]
};

function isGoodPartition(s: string, left: number, right: number, k: number) {
    return parseInt(s.slice(left, right)) <= k
}