// @algorithm @lc id=3308 lang=typescript 
// @title apply-operations-to-make-string-empty
// @test("aabcbbca")="ba"
// @test("abcd")="abcd"
function lastNonEmptyString(s: string): string {
    const map: Map<string, number> = new Map()
    const lastIndexMap: Map<string, number> = new Map()
    const n = s.length
    for (let i = 0; i < n; i++) {
        const char = s[i]
        map.set(char, (map.get(char) ?? 0) + 1)
        lastIndexMap.set(char, i)
    }
    let maxValue = -1
    map.forEach((value, key) => {
        if (value > maxValue) {
            maxValue = value
        }
    })
    const keys: string[] = []
    map.forEach((value, key) => {
        if (value === maxValue) {
            keys.push(key)
        }
    })
    return keys.map(key => {
        return {
            key,
            lastIndex: lastIndexMap.get(key)!
        }
    })
    .sort((x, y) => x.lastIndex - y.lastIndex)
    .reduce((str, item) => str + item.key, '')
};