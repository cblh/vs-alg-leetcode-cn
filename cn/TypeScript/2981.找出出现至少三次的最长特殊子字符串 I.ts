// @algorithm @lc id=3267 lang=typescript 
// @title find-longest-special-substring-that-occurs-thrice-i
// @test("aaaa")=2
// @test("abcdef")=-1
// @test("abcaba")=1
function maximumLength(s: string): number {
    const n: number = s.length;
    let [l, r]: [number, number] = [0, n];

    while (l < r) {
        const mid = Math.floor((l + r + 1) / 2)
        if (check(s, mid)) {
            l = mid
        } else {
            r = mid - 1
        }
    }
    return l === 0 ? -1 : l
}
function check(s: string, x: number): boolean {
    const cnt = new Array(26).fill(0),
        n = s.length
    for (let i = 0; i < n;) {
        let j = i + 1
        while (j < n && s[j] === s[i]) {
            j++
        }

        const k = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
        cnt[k] += Math.max(0, j - i - x + 1)
        if (cnt[k] >= 3) {
            return true
        }
        i = j
    }
    return false
}
