// @algorithm @lc id=342 lang=typescript 
// @title power-of-four
// @test(16)=true
// @test(5)=false
// @test(1)=true
function isPowerOfFour(n: number): boolean {
    return n > 0 && (n & (n - 1)) ===0 && (n & 0xaaaaaaaa) === 0
};