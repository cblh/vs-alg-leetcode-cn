// @algorithm @lc id=3312 lang=typescript 
// @title number-of-changing-keys
// @test("aAbBcC")=2
// @test("AaAaAaaA")=0
function countKeyChanges(s: string): number {
    let previous = s.charAt(0)
    let ans = 0
    for (const char of s) {
        if (char.charCodeAt(0) !== previous.charCodeAt(0) && Math.abs(char.charCodeAt(0) - previous.charCodeAt(0)) !== 32) {
            ans++
        }
        previous = char
    }
    return ans
};