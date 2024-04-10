// @algorithm @lc id=1555 lang=typescript 
// @title number-of-ways-of-cutting-a-pizza
// @test(["A..","AAA","..."],3)=3
// @test(["A..","AA.","..."],3)=1
// @test(["A..","A..","..."],1)=1
function ways(pizza: string[], k: number): number {
    const mod = 1e9 + 7
    const m = pizza.length,
        n = pizza[0].length
    const f = Array.from({ length: m + 1 }, () => {
        return Array.from({ length: n + 1 }, () => {
            return Array.from({ length: k + 1 }, () => -1)
        })
    })
    const s = Array.from({ length: m + 1 }, () => {
        return Array.from({ length: n + 1 }, () => 0)
    })

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            s[i][j] = s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1] + (pizza[i - 1][j - 1] === 'A' ? 1 : 0)
        }
    }
    function dfs(i: number, j: number, k: number): number {
        if (f[i][j][k] !== -1) {
            return f[i][j][k]
        }
        if (k === 0) {
            if (s[m][n] - s[i][n] - s[m][j] + s[i][j] > 0) {
                return 1
            }
            return 0
        }
        let ans = 0
        for (let x = i + 1; x < m; x++) {
            if (s[x][n] - s[i][n] - s[x][j] + s[i][j] > 0) {
                ans = (ans + dfs(x, j, k - 1)) % mod
            }
        }
        for (let y = j + 1; y < n; y++) {
            if (s[m][y] - s[i][y] - s[m][j] + s[i][j] > 0) {
                ans = (ans + dfs(i, y, k - 1)) % mod
            }
        }
        return (f[i][j][k] = ans)
    }

    return dfs(0, 0, k - 1)
}