// @algorithm @lc id=3308 lang=typescript 
// @title apply-operations-to-make-string-empty
// @test("aabcbbca")="ba"
// @test("abcd")="abcd"
function lastNonEmptyString(s: string): string {
    const map: Map<string, number> = new Map()
    const lastIndexMap: Map<string, number> = new Map()
    const n = s.length
    let maxValue = -1
    for (let i = 0; i < n; i++) {
        const char = s[i]
        const count = (map.get(char) ?? 0) + 1
        map.set(char, count)
        maxValue = Math.max(count, maxValue)
        lastIndexMap.set(char, i)
    }
   
    let str = ''
    for (let i = 0; i < n; i++) {
        const char = s[i]
        if (map.get(char) === maxValue && lastIndexMap.get(char) === i) {
            str += char
        }
    }
    return str
};