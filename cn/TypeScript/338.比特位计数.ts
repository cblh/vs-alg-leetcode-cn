// @algorithm @lc id=338 lang=typescript 
// @title counting-bits
// @test(2)=[0,1,1]
// @test(5)=[0,1,1,2,1,2]
function countBits(n: number): number[] {
    const ans: number[] = Array(n + 1).fill(0);
    for (let i = 1; i <= n; ++i) {
        ans[i] = ans[i & (i - 1)] + 1
    }
    return ans;
};