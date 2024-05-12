// @algorithm @lc id=3403 lang=typescript 
// @title minimum-substring-partition-of-equal-character-frequency
// @test("fabccddg")=3
// @test("abababaccddb")=2
function minimumSubstringsInPartition(s: string): number {
    const n = s.length
    let counter = new Array(26).fill(0)
    const f = Array.from({
        length: n + 1
    }, () => n + 1)
    f[0] = 0
    for (let i = 1; i <= n; i++) {
        counter = new Array(26).fill(0)
        let charCount = 0,
            maxFreqChar = 0
        for (let j = i - 1; j >= 0; j--) {
            const t = ++counter[s[j].charCodeAt(0) - 'a'.charCodeAt(0)]
            if (t === 1) {
                charCount += 1
            }
            maxFreqChar = Math.max(maxFreqChar, t)

            if (maxFreqChar * charCount === i - j) {
                f[i] = Math.min(f[i], f[j] + 1)
            }
        }
    }
    return f[n]
};