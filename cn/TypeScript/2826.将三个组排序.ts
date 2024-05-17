// @algorithm @lc id=2904 lang=typescript 
// @title sorting-three-groups
// @test([2,1,3,2,1])=3
// @test([1,3,2,1,3,3])=2
// @test([2,2,2,2,3,3])=0
function minimumOperations(nums: number[]): number {
    let f: number[] = new Array(3).fill(0);
    for (const x of nums) {
        const g: number[] = new Array(3).fill(0);
        if (x === 1) {
            g[0] = f[0];
            g[1] = Math.min(f[0], f[1]) + 1;
            g[2] = Math.min(f[0], f[1], f[2]) + 1;
        } else if (x === 2) {
            g[0] = f[0] + 1;
            g[1] = Math.min(f[0], f[1]);
            g[2] = Math.min(f[0], f[1], f[2]) + 1;
        } else {
            g[0] = f[0] + 1;
            g[1] = Math.min(f[0], f[1]) + 1;
            g[2] = Math.min(f[0], f[1], f[2]);
        }
        f = g;
    }
    return Math.min(...f);
};