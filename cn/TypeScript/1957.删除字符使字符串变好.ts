// @algorithm @lc id=1302 lang=typescript 
// @title delete-characters-to-make-fancy-string
// @test("leeetcode")="leetcode"
// @test("aaabaaaa")="aabaa"
// @test("aab")="aab"
function makeFancyString(s: string): string {
    const n = s.length
    let i = 0
    let res = ''
    while (i < n) {
        const start = i
        i++
        while (i < n && s[i] === s[i - 1]) {
            i++
        }
        res += s.slice(start, i - start >= 3 ? start + 2 : i)
    }
    return res
};