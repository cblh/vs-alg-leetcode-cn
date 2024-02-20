// @algorithm @lc id=1994 lang=typescript 
// @title minimum-number-of-swaps-to-make-the-binary-string-alternating
// @test("111000")=1
// @test("010")=0
// @test("1110")=-1
function minSwaps(s: string): number {
    const swap1 = canAlter('0', s),
    swap2 = canAlter('1', s)
    const result = Math.min(swap1, swap2)
    return result === s.length ? -1 :result
};
function canAlter(matchChar: string, s: string) {
    let missOne = 0,
    missZero = 0
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (matchChar !== char) {
            if (char === '1') {
                missOne++
            } else {
                missZero++
            }
        }
        matchChar = matchChar === '1' ? '0' : '1'
    }

    return missOne === missZero ? missOne : s.length
}