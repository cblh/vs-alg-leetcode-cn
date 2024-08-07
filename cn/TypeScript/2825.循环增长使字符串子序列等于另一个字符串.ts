// @algorithm @lc id=3018 lang=typescript 
// @title make-string-a-subsequence-using-cyclic-increments
// @test("abc","ad")=true
// @test("zc","ad")=true
// @test("ab","d")=false
function canMakeSubsequence(str1: string, str2: string): boolean {
    let i = 0
    const n = str2.length
    for (const c of str1) {
        const d = c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1)
        if (i < n && (str2[i] === d || str2[i] === c)) {
            i++
        }
    }
    return i === n
};