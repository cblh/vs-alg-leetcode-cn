// @test("leetcode",3)=true
// @test("abcba",4)=true
// @test("abcd",2)=false
function minimumTimeToInitialState(s: string): boolean {
    const set = new Set()
    const n = s.length
    for (let i = 0; i < n - 1; i++) {
        set.add(s.slice(i, i + 2))
    }
    const reversed = s.split("").reverse().join("")
    for (let i = 0; i < n - 1; i++) {
        if (set.has(reversed.slice(i, i + 2))) {
            return true
        }
    }
    return false
}