// @algorithm @lc id=394 lang=typescript 
// @title decode-string
// @test("3[a]2[bc]")="aaabcbc"
// @test("3[a2[c]]")="accaccacc"
// @test("2[abc]3[cd]ef")="abcabccdcdcdef"
function decodeString(s: string): string {
    const stack: Array<[string, number]> = []
    let ans = ''
    let count = 0
    for (const char of s) {
        if (/[0-9]/.test(char)) {
            count = count * 10 + Number(char)
        } else if (/[a-z]/.test(char)) {
            ans += char
        } else if ('[' === char) {
            stack.push([ans, count])
            ans = ''
            count = 0
        } else {
            let [pre, count] = stack.pop()
            ans = pre + ans.repeat(count)
        }
    }
    return ans
};