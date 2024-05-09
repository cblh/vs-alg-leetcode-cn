// @algorithm @lc id=2519 lang=typescript 
// @title find-the-original-array-of-prefix-xor
// @test([5,2,0,3,1])=[5,7,2,3,2]
// @test([13])=[13]
function findArray(pref: number[]): number[] {
    let ans = pref.slice()
    for (let i = 1; i < pref.length; i++) {
        ans[i] = pref[i - 1] ^ pref[i]
    }
    return ans
};