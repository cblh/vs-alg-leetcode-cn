// @algorithm @lc id=151 lang=typescript 
// @title reverse-words-in-a-string
// @test("the sky is blue")="blue is sky the"
// @test("  hello world  ")="world hello"
// @test("a good   example")="example good a"
function reverseWords(s: string): string {
    const ans: string[] = []
    let i = 0,
        n = s.length
    while (i < n) {
        while (i < n && s[i] === ' ') {
            i++
        }
        if (i < n) {
            let j = i
            while (j < n && s[j] !== ' ') {
                j++
            }
            ans.unshift(s.slice(i, j))
            i = j 
        }
    }
    return ans.join(' ')
}
