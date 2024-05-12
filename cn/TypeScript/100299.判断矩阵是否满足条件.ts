// @algorithm @lc id=3415 lang=typescript 
// @title check-if-grid-satisfies-conditions
// @test([[1,0,2],[1,0,2]])=true
// @test([[1,1,1],[0,0,0]])=false
// @test([[1],[2],[3]])=false
function satisfiesConditions(grid: number[][]): boolean {
    const m = grid.length,
        n = grid[0].length
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j > 0 && grid[i][j] === grid[i][j - 1]) {
                return false
            }
            if (i > 0 && grid[i][j] !== grid[i - 1][j]) {
                return false
            }
        }
    }
    return true
};