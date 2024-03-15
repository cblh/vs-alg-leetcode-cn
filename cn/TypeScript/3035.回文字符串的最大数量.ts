// @algorithm @lc id=3317 lang=typescript 
// @title maximum-palindromes-after-operations
// @test(["abbb","ba","aa"])=3
// @test(["abc","ab"])=2
// @test(["cd","ef","a"])=1
// @test(["aa","bc"])=1
function maxPalindromesAfterOperations(words: string[]): number {
    let s: number = 0
    let mask: number = 0
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        s += word.length
        for (let j = 0; j < word.length; j++) {
            mask ^= 1 << (word.charCodeAt(j) - 'a'.charCodeAt(0))
        }
    }
    s -= (mask.toString(2).match(/1/g) ?? []).length
    words.sort((a, b) => a.length - b.length)
    let ans = 0
    for (const word of words) {
        s -= Math.floor(word.length / 2) * 2
        if (s < 0) {
            break
        }
        ans++
    }
    return ans
}

