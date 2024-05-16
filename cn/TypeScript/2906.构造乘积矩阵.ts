// @algorithm @lc id=3031 lang=typescript 
// @title construct-product-matrix
// @test([[1,2],[3,4]])=[[24,12],[8,6]]
// @test([[12345],[2],[1]])=[[2],[0],[0]]
// @test([[2,1,1]])=[[1,2,2]]
// @test([[8,18],[24,20],[9,5],[26,26],[19,19],[20,1],[20,23],[15,19],[24,14],[12,15],[22,3],[22,11],[9,25]])=[[11625,3795],[12105,4650],[7590,6255],[8325,8325],[4245,4245],[4650,6585],[4650,2970],[2085,4245],[12105,10170],[11865,2085],[3105,10425],[3105,6210],[7590,3720]]
function constructProductMatrix(grid: number[][]): number[][] {
    const mod = 12345;
    const [n, m] = [grid.length, grid[0].length];
    const p: number[][] = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
    let suf = 1;
    for (let i = n - 1; ~i; --i) {
        for (let j = m - 1; ~j; --j) {
            p[i][j] = suf;
            suf = (suf * grid[i][j]) % mod;
        }
    }
    let pre = 1;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            p[i][j] = (p[i][j] * pre) % mod;
            pre = (pre * grid[i][j]) % mod;
        }
    }
    return p;
}