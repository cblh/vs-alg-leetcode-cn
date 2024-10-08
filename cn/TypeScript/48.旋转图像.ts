// @algorithm @lc id=48 lang=typescript 
// @title rotate-image
// @test([[1,2,3],[4,5,6],[7,8,9]])=[[7,4,1],[8,5,2],[9,6,3]]
// @test([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])=[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    matrix.reverse()
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
};