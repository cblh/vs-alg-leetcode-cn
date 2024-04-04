// @algorithm @lc id=91 lang=typescript 
// @title decode-ways
// @test("12")=2
// @test("226")=3
// @test("06")=0
function numDecodings(s: string): number {
    const n = s.length
    let [f, g] = [0, 1]
    for (let i = 1; i <= n; i++) {
        let h = s[i - 1] !== '0' ? g : 0
        if (i > 1 && (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6'))) {
            h += f
        }
        [f, g] = [g, h]
    }
    return g
};