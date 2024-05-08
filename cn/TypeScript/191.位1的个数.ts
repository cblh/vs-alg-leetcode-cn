// @algorithm @lc id=191 lang=typescript 
// @title number-of-1-bits
// @test(11)=3
// @test(128)=1
// @test(2147483645)=30
function hammingWeight(n: number): number {
    let ans = 0
    while (n > 0) {
        ans += n & 1
        n >>= 1
    }
    return ans
};