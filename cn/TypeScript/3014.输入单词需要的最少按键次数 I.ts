// @algorithm @lc id=3275 lang=typescript 
// @title minimum-number-of-pushes-to-type-word-i
// @test("abcde")=5
// @test("xycdefghij")=12
function minimumPushes(word: string): number {
    const cnt = new Map()
    for (const char of word) {
        cnt.set(char, (cnt.get(char) ?? 0) + 1)
    }
    let i = 0
    let ans = 0
    const arr: number[] = []
    cnt.forEach((value, key) => {
        arr.push(value)
    })
    arr.sort((a, b) => a - b)
    arr.forEach(value => {
        const pushCount = Math.floor(i / 8) + 1
        ans += value * pushCount
        i++
    })
    return ans
};