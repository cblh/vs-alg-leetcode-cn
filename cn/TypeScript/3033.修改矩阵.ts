// @algorithm @lc id=3330 lang=typescript 
// @title modify-the-matrix
// @test([[1,2,-1],[4,-1,6],[7,8,9]])=[[1,2,9],[4,8,6],[7,8,9]]
// @test([[3,-1],[5,2]])=[[3,2],[5,2]]
function modifiedMatrix(matrix: number[][]): number[][] {
    const [m, n] = [matrix.length, matrix[0].length]

    for (let i = 0; i < n; i++) {
        let mx = -1
        for (let j = 0; j < m; j++) {
            mx = Math.max(mx, matrix[j][i])
        }
        for (let j = 0; j < m; j++) { 
            if (matrix[j][i] === -1) {
                matrix[j][i] = mx
            }
        }
    }
    return matrix
};