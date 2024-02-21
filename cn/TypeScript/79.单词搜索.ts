// @algorithm @lc id=79 lang=typescript 
// @title word-search
// @test([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED")=true
// @test([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE")=true
// @test([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB")=false
// @test([["C","A","A"],["A","A","A"],["B","C","D"]], "AAB")=true
function exist(board: string[][], word: string): boolean {
    const h = board.length,
    w = board[0].length
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const visited: boolean[][] = new Array(h).fill(0).map(() => [])
    function dfs(row: number, col: number, s: string, steps: number): boolean {
        if (row < 0 || row > h - 1) {
            return false
        }
        if (col < 0 || col > w - 1) {
            return false
        }
        if (visited[row][col]) {
            return false
        }
        if (board[row][col] !== s[steps]) {
            return false
        }
        if (steps === s.length - 1) {
            return true
        }
        visited[row][col] = true
        for (const [moveRow, moveCol] of directions) {
            const newRow = row + moveRow,
            newCol = col + moveCol
            const result = dfs(newRow, newCol, s, steps + 1)
            if (result) {
                visited[row][col] = false
                return true
            }
        }
        visited[row][col] = false
        return false
    }
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const result = dfs(i, j, word, 0)
            if (result) {
                return true
            }
        }
    }
    return false
};