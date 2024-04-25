// @algorithm @lc id=1999 lang=typescript 
// @title longer-contiguous-segments-of-ones-than-zeros
// @test("1101")=true
// @test("111000")=false
// @test("110100010")=false
function checkZeroOnes(s: string): boolean {
    return f(s, '1') > f(s, '0')
};

function f(s: string, target: string): number {
    const n = s.length
    let i = 0
    let mx = 0
    let cnt = 0
    while (i < n) {
        const char = s[i]
        if (char === target) {
            mx = Math.max(mx, ++cnt)
        } else {
            cnt = 0
        }
        i++
    }
    return mx
}