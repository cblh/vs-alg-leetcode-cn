// @algorithm @lc id=3335 lang=typescript 
// @title minimum-operations-to-write-the-letter-y-on-a-grid
// @test([[1,2,2],[1,1,0],[0,1,0]])=3
// @test([[0,1,0,1,0],[2,1,0,1,2],[2,2,2,0,1],[2,2,2,2,2],[2,1,2,2,2]])=12
function minimumOperationsToWriteY(grid: number[][]): number {
    const n = grid.length
    const letter = 3
    const cnt1: number[] = new Array(letter).fill(0),
    cnt2: number[] =  new Array(letter).fill(0)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const a = i === j && i <= n >> 1,
            b = i + j === n - 1 && i <= n >> 1,
            c = j === n >> 1 && i >= n >> 1
            if (a || b || c) {
                cnt1[grid[i][j]]++
            } else {
                cnt2[grid[i][j]]++
            }
        }
    }
    let ans = n * n
    for (let i = 0; i < letter; i++) {
        for (let j = 0; j < letter; j++) { 
            if (i === j) {
                continue
            }
            ans = Math.min(ans, n * n - cnt1[i] - cnt2[j])
        }
    }
    return ans
}