// @algorithm @lc id=231 lang=typescript 
// @title power-of-two
// @test(1)=true
// @test(16)=true
// @test(3)=false
function isPowerOfTwo(n: number): boolean {
    return n > 0 && (n & (n - 1)) ===0
};