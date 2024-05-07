// @algorithm @lc id=2659 lang=typescript 
// @title number-of-even-and-odd-bits
// @test(17)=[2,0]
// @test(2)=[0,1]
function evenOddBit(n: number): number[] {
    const ans = new Array(2).fill(0)
    for (let i = 0; n > 0; n >>= 1, i ^= 1) {
        ans[i] += n & 1
    }
    return ans
};