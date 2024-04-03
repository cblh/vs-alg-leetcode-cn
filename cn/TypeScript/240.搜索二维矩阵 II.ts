// @algorithm @lc id=240 lang=typescript 
// @title search-a-2d-matrix-ii
// @test([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],5)=true
// @test([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],20)=false
function searchMatrix(matrix: number[][], target: number): boolean {
    const n = matrix[0].length
    for (const row of matrix) {
        let left = 0,
            right = n
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (row[mid] >= target) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        if (left !== n && row[left] === target) {
            return true
        }
    }
    return false
}