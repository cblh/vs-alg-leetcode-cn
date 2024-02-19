// @algorithm @lc id=733 lang=typescript 
// @title flood-fill
// @test([[1,1,1],[1,1,0],[1,0,1]],1,1,2)=[[2,2,2],[2,2,0],[2,0,1]]
// @test([[0,0,0],[0,0,0]],0,0,0)=[[0,0,0],[0,0,0]]
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const directions = [[1,0],[-1,0],[0,1],[0,-1]]
    const width = image[0].length,
    height = image.length
    const currentColor = image[sr][sc];
    function dfs(row: number, col: number) {
        if (0 > row || row >= height) {
            return
        }
        if (0 > col || col >= width) {
            return
        }
        if (image[row][col] !== currentColor) {
            return
        }
        image[row][col] = color
        for (const direction of directions) {
            dfs(row + direction[0], col + direction[1])
        }
    }
    if (currentColor !== color) {
        dfs(sr, sc)
    }
    return image
};