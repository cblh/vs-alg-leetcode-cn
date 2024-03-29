// @algorithm @lc id=32 lang=typescript 
// @title longest-valid-parentheses
// @test("(()")=2
// @test(")()())")=4
// @test("")=0
function longestValidParentheses(s: string): number {
    let ans = 0;
    const stack = [-1]
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (char === '(') {
            stack.push(i)
        } else {
            stack.pop()
            if (stack.length === 0) {
                stack.push(i)
            } else {
                ans = Math.max(ans, i - stack[stack.length - 1])
            }
        }
    }
    return ans
};