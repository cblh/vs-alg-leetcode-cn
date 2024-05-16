// @algorithm @lc id=2884 lang=typescript 
// @title length-of-the-longest-valid-substring
// @test("cbaaaabc",["aaa","cb"])=4
// @test("leetcode",["de","le","e"])=4
// @test("aaaabaaacc", ["bcca","aaa","aabaa","baaac"])=4
function longestValidSubstring(word: string, forbidden: string[]): number {
    const n = word.length
    const s = new Set(forbidden)
    let ans = 0
    for (let i = 0, j = 0; j < n; j++) {
        for (let k = j; k > Math.max(j - 10, i - 10); k--) {
            if (s.has(word.substring(k, j + 1))) {
                i = k + 1
                break
            }
        }
        ans = Math.max(ans, j - i + 1)
    }
    return ans
};