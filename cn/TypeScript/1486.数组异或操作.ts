// @algorithm @lc id=1610 lang=typescript 
// @title xor-operation-in-an-array
// @test(5,0)=8
// @test(4,3)=8
function xorOperation(n: number, start: number): number {
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        ans ^= start + 2 * i;
    }
    return ans;
};