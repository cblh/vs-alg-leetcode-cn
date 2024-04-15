// @algorithm @lc id=3 lang=typescript 
// @title longest-substring-without-repeating-characters
// @test("abcabcbb")=3
// @test("bbbbb")=1
// @test("pwwkew")=3
function lengthOfLongestSubstring(s: string): number {
    let left = 0,
        right = 0
    const n = s.length
    const map = new Map()
    let ans = 0
    while (right < n) {
        const char = s[right]
        map.set(char, (map.get(char) ?? 0) + 1)
        right++
        while (map.get(char) > 1) {
            const toDelete = s[left]
            map.set(toDelete, (map.get(toDelete) ?? 0) - 1)
            left++
        }
        ans = Math.max(ans, right - left)
    }
    return ans
};