// @algorithm @lc id=3445 lang=typescript 
// @title lexicographically-minimum-string-after-removing-stars
// @test("aaba*")="aab"
// @test("abc")="abc"
function clearStars(s: string): string {
    const removed = new Array(s.length).fill(false)
    const counts = new Array(26).fill(0)
    const pre: number[][] = new Array(26).fill(0).map(() => [])
    const g = i => s[i].charCodeAt(0) - 'a'.charCodeAt(0)
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            removed[i] = true
            for (let j = 0; j < 26; j++) {
                if (counts[j]) {
                    counts[j] -= 1
                    removed[pre[j].pop()] = true
                    break
                }
            }
        } else {
            const k = g(i)
            counts[k]++
            pre[k].push(i)
        }
    }
    return removed.map((item, i) => {
        return item === false ? s[i] : ''
    }).join('')
};