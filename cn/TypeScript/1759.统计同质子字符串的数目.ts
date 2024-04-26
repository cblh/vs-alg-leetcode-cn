// @algorithm @lc id=1885 lang=typescript 
// @title count-number-of-homogenous-substrings
// @test("abbcccaa")=13
// @test("xy")=2
// @test("zzzzz")=15
function countHomogenous(s: string): number {
    let cnt = 1
    let ans = 0
    const n = s.length
    const mod = 1e9 + 7;
    for (let i = 1; i < n + 1; i++) {
        if (s[i] === s[i - 1]) {
            cnt++
        } else {
            ans += Math.floor((cnt * (cnt + 1)) / 2)
            ans %= mod
            cnt = 1
        }
    }
    return ans
};