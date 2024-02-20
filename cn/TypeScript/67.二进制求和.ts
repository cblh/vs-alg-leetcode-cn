// @algorithm @lc id=67 lang=typescript 
// @title add-binary
// @test("11","1")="100"
// @test("1010","1011")="10101"
function addBinary(a: string, b: string): string {
    let n = a.length - 1,
    m = b.length - 1
    let pre = 0,
    result = ''
    while (m >= 0 || n >= 0) {
        const left = n >= 0 ? parseInt(a.charAt(n)) : 0,
        right = m >= 0 ? parseInt(b.charAt(m)) : 0
        let ans = left + right + pre
        if (ans >= 2) {
            pre = 1
            ans %= 2
        } else {
            pre = 0
        }
        result = ans + result
        m--
        n--
    }
    if (pre === 1) {
        result = pre + result
    }
    return result
};