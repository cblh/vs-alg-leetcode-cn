// @algorithm @lc id=1542 lang=typescript 
// @title consecutive-characters
// @test("leetcode")=2
// @test("abbcccddddeeeeedcba")=5
// @test("tourist")=1
function maxPower(s: string): number {
    let n = s.length
    let i = 1
    let max = 1
    let cnt = 1
    while (i < n) {
        if (s[i] === s[i - 1]) {
            max = Math.max(max, ++cnt)
        } else {
            cnt = 1
        }
        i++
    }
    return max
};