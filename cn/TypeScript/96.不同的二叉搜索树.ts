// @algorithm @lc id=96 lang=typescript 
// @title unique-binary-search-trees
// @test(3)=5
// @test(1)=1
function numTrees(n: number): number {
    const f = Array.from({ length: n + 1}, () => 0)
    f[0] = 1
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            f[i] += f[j] * f[i - j - 1]
        }
    }
    return f[n]
};