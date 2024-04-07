// @algorithm @lc id=227 lang=typescript 
// @title basic-calculator-ii
// @test("3+2*2")=7
// @test(" 3/2 ")=1
// @test(" 3+5 / 2 ")=5
// @test("0-2147483647")=-2147483647
// @test("14-3/2")=13
function calculate(s: string): number {
    const stack: number[] = []

    let v = 0,
        n = s.length
    let sign = '+'
    for (let i = 0; i < n; i++) {
        const char = s[i]
        if (!isNaN(parseInt(char))) {
            v = v * 10 + parseInt(char)
        }
        if (i === n - 1 || char === '+' || char === '-' || char === '*' || char === '/') {
            if (sign === '+') {
                stack.push(v)
            } else if (sign === '-') {
                stack.push(-v)
            } else if (sign === '*') {
                stack.push(stack.pop()! * v)
            } else if (sign === '/') {
                stack.push(stack[stack.length - 1] > 0 ? Math.floor(stack.pop()! / v) : Math.ceil(stack.pop()! / v))
            }
            sign = char
            v = 0
        }
    }
    let ans = 0
    while (stack.length !== 0) {
        ans += stack.pop()!
    }
    return ans
};