// @algorithm @lc id=542 lang=typescript 
// @title 01-matrix
// @test([[0,0,0],[0,1,0],[0,0,0]])=[[0,0,0],[0,1,0],[0,0,0]]
// @test([[0,0,0],[0,1,0],[1,1,1]])=[[0,0,0],[0,1,0],[1,2,1]]
function updateMatrix(mat: number[][]): number[][] {
    const rowLen = mat.length,
    colLen = mat[0].length,
    updatedMatrix = new Array(rowLen).fill(0).map(() => new Array(colLen).fill(-1))
    const isValidCell = (row: number, col: number) => {
        return row >= 0 && row < rowLen && col >= 0 && col < colLen
    }

    const directions: [number, number][] = [
        [1, 0],  //right
        [0, 1],  //bottom
        [-1, 0], //left
        [0, -1]  //top
    ]

    const queue: [[number, number], number][] = []

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (mat[i][j] === 0) {
                updatedMatrix[i][j] = 0
                queue.push([[i, j], 0])
            }
        }
    }

    while (queue.length > 0) {
        const [[x, y], steps] = queue.shift()
        for (const [moveX, moveY] of directions) {
            const nextX = x + moveX,
            nextY = y + moveY
            if (isValidCell(nextX, nextY) && updatedMatrix[nextX][nextY] === -1) {
                updatedMatrix[nextX][nextY] = steps + 1
                queue.push([[nextX, nextY], steps + 1])
            }
        }
    }
    return updatedMatrix
};