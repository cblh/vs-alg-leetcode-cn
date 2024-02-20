// @algorithm @lc id=1036 lang=typescript 
// @title rotting-oranges
// @test([[2,1,1],[1,1,0],[0,1,1]])=4
// @test([[2,1,1],[0,1,1],[1,0,1]])=-1
// @test([[1,2]])=1
// @test([[2,1,1],[1,1,1],[0,1,2]])=2
function orangesRotting(grid: number[][]): number {
    const rowLen = grid.length,
    colLen = grid[0].length,
    directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    const queue: [number, number, number][] = []
    let orangeCount = 0
    grid.forEach((row, rowIndex) => {
        row.forEach((item, colIndex) => {
            if (item === 2) {
                queue.push([rowIndex, colIndex, 0])
            }
            if (item !== 0) {
                orangeCount++
            }
        })
    })

    let time = 0,
    rotedCount = queue.length
    while (queue.length !== 0) {
        const [row, col, step] = queue.shift()!
        time = Math.max(step, time)
        for (const [moveX, moveY] of directions) {
            const newRow = row + moveX,
            newCol = col + moveY
            if (grid[newRow]?.[newCol] === 1) {
                grid[newRow][newCol] = 2
                rotedCount++
                queue.push([newRow, newCol, step + 1])
            }
        }
    }

    return rotedCount === orangeCount ? time : -1
};