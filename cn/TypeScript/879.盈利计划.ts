// @algorithm @lc id=911 lang=typescript 
// @title profitable-schemes
// @test(5,3,[2,2],[2,3])=2
// @test(10,5,[2,3,5],[6,7,8])=7
function profitableSchemes(n: number, minProfit: number, group: number[], profit: number[]): number {
    const mod = 1e9 + 7
    const m = group.length
    const f = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0).map(() => new Array(minProfit + 1).fill(0)))
    for (let i = 0; i <= n; i++) {
        f[0][i][0] = 1
    }
    for (let i = 1; i <=m; i++) {
        const a = group[i - 1],
        b = profit[i - 1]
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= minProfit; k++) {
                f[i][j][k] = f[i - 1][j][k]
                if (j >= a) {
                    const u = Math.max(k - b, 0)
                    f[i][j][k] += f[i - 1][j - a][u]
                    if (f[i][j][k] >= mod) {
                        f[i][j][k] -= mod
                    }
                }
            }
        }
    }
    return f[m][n][minProfit]
};