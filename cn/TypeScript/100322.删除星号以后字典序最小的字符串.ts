// @algorithm @lc id=3445 lang=typescript 
// @title lexicographically-minimum-string-after-removing-stars
// @test("aaba*")="aab"
// @test("abc")="abc"
function clearStars(s: string): string {
    const removed = new Array(s.length).fill(false)
    const counts = new Array(26).fill(0)
    const pre: number[][] = Array.from({ length: 26 }, () => [])
    const calcIndex = (i: number) => s[i].charCodeAt(0) - 'a'.charCodeAt(0)
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (char === '*') {
            for (let j = 0; j < 26; j++) {
                const count = counts[j]
                if (count > 0) {
                    counts[j]--
                    removed[pre[j].pop()] = true
                    break
                }
            }
            removed[i] = true
        } else {
            const k = calcIndex(i)
            counts[k]++
            pre[k].push(i)
        }
    }
    return removed.map((noshow, i) => !noshow ? s[i] : '').join('')
};