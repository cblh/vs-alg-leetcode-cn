// @algorithm @lc id=415 lang=typescript 
// @title add-strings
// @test("11","123")="134"
// @test("456","77")="533"
// @test("0","0")="0"
function addStrings(num1: string, num2: string): string {
    const n = num1.length,
        m = num2.length
    const max = Math.max(n, m)
    let plus = 0
    let ans = ''
    for (let i = 1; i <= max; i++) {
        const left = n - i >= 0 ? num1[n - i] : '0'
        const right = m - i >= 0 ? num2[m - i] : '0'
        const count = parseInt(left) + parseInt(right) + plus
        plus = count >= 10 ? 1 : 0
        ans = count % 10 + ans
    }
    if (plus === 1) {
        ans = plus + ans
    }
    return ans
};