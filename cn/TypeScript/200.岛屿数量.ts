// @algorithm @lc id=200 lang=typescript 
// @title number-of-islands
// @test([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])=1
// @test([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])=3
function numIslands(grid: string[][]): number {
    const rowLen = grid.length,
    colLen = grid[0].length,
    directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    function dfs(row: number, col: number) {
        if (row < 0 || row >= rowLen) {
            return
        }
        if (col < 0 || col >= colLen) {
            return
        }
        if (grid[row][col] === '0') {
            return
        }
        grid[row][col] = '0'
        for (const [moveX, moveY] of directions) {
            const newX = row + moveX,
            newY = col + moveY
            dfs(newX, newY)
        }
    }
    let res = 0
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (grid[i][j] === '1') {
                res++
                dfs(i, j)
            }
        }
    }

    return res
};