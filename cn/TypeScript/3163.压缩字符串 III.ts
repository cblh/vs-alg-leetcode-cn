// @algorithm @lc id=3451 lang=typescript 
// @title string-compression-iii
// @test("abcde")="1a1b1c1d1e"
// @test("aaaaaaaaaaaaaabb")="9a5a2b"
function compressedString(word: string): string {
    let left = 0,
        right = 0
    const n = word.length
    let ans = ''
    while (left < n){
        right = left+1
        while (right < n && word[right] === word[left]) {
            right++
        }
        let k = right - left
        while (k) {
            const x = Math.min(k, 9)
            ans += x + word[left]
            k -= x
        }
        left = right
    }
    return ans
};