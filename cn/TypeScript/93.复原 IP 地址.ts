// @algorithm @lc id=93 lang=typescript 
// @title restore-ip-addresses
// @test("25525511135")=["255.255.11.135","255.255.111.35"]
// @test("0000")=["0.0.0.0"]
// @test("101023")=["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
function restoreIpAddresses(s: string): string[] {
    const n = s.length
    const dp: string[][][] = new Array(n + 1).fill(0).map(() => [])
    dp[0] = [['']]
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[j].forEach(item => {
                if (item.length > 0 && item.length < 5) {
                    const toCheck  = s.slice(j, i)
                    if (parseInt(toCheck) < 256 && !/^0\d+/.test(toCheck)) {
                        dp[i].push([...item, toCheck])
                    }
                }
            })
        }
    }
    return dp[n].filter(path => path.length === 5).map(path => {
        path.shift()
        return path.join('.')
    })
};