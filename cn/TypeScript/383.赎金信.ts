// @algorithm @lc id=383 lang=typescript 
// @title ransom-note
// @test("a","b")=false
// @test("aa","ab")=false
// @test("aa","aab")=true
function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map()
    for (const char of magazine) {
        map.set(char, (map.get(char) ?? 0) + 1)
    }
    for (const char of ransomNote) {
        const count = (map.get(char) ?? 0) - 1
        if (count < 0) {
            return false
        }
        map.set(char, count)
    }
    return true
};