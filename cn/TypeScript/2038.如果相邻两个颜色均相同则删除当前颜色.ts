// @algorithm @lc id=2149 lang=typescript 
// @title remove-colored-pieces-if-both-neighbors-are-the-same-color
// @test("AAABABB")=true
// @test("AA")=false
// @test("ABBBBBBBAAA")=false
function winnerOfGame(colors: string): boolean {
    const n = colors.length
    let i = 0
    let f = 0
    let g = 0
    while (i < n) {
        let start = i
        while (i + 1 < n && colors[i + 1] === colors[i]) {
            i++
        }
        if (colors[start] === 'A') {
            f += Math.max(i - start - 1, 0)
        } else {
            g += Math.max(i - start - 1, 0)
        }
        i++
    }
    return f > g
};