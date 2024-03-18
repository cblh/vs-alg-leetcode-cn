// @test("abada","a")=6
// @test("zzz","z")=6
function countSubstrings(s: string, c: string): number {
    const n = s.length
    let count = 0
    for (let i = 0; i < n; i++) {
        const char = s[i]
        if (char === c) {
            count++
        }
    }
    let ans = 0
    while(count > 0) {
        ans += count
        count--
    }
    return ans
};