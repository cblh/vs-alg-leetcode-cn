// @algorithm @lc id=474 lang=typescript 
// @title ones-and-zeroes
// @test(["10","0001","111001","1","0"],5,3)=4
// @test(["10","0","1"],1,1)=2
function findMaxForm(strs: string[], m: number, n: number): number {
    const N = strs.length
    const cnt = new Array(N).fill(0).map(() => new Array(2).fill(0))
    for (let i = 0; i < N; i++) {
        const str = strs[i]
        let zero = 0,
        one = 0
        for (const char of str) {
            if (char === '0') {
                zero++
            } else {
                one++
            }
        }
        cnt[i] = [zero, one]
    }
    const dp = new Array(N + 1).fill(0).map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)))
    for (let i = 1; i <= N; i++) {
        const zero = cnt[i - 1][0],
        one = cnt[i - 1][1]
        for (let c1 = 0; c1 <= m; c1++) {
            for (let c2 = 0; c2 <= n; c2++) {
                const a = (c1 >= zero && c2 >= one) ? dp[i - 1][c1 - zero][c2 - one] + 1 : 0
                dp[i][c1][c2] = Math.max(dp[i - 1][c1][c2], a)
            }
        }
    }
    return dp[N][m][n]
};