// @algorithm @lc id=2323 lang=typescript 
// @title minimum-bit-flips-to-convert-number
// @test(10,7)=3
// @test(3,4)=3
function minBitFlips(start: number, goal: number): number {
    let ans = 0
    while (start > 0 || goal > 0) {
        ans += (start & 1) ^ (goal & 1)
        if (start > 0) {
            start >>= 1
        }
        if (goal > 0) {
            goal >>= 1
        }
    }
    return ans
};