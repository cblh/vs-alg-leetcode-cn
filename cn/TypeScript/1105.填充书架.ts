// @algorithm @lc id=1196 lang=typescript 
// @title filling-bookcase-shelves
// @test([[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]],4)=6
// @test([[1,3],[2,4],[3,2]],6)=4
function minHeightShelves(books: number[][], shelfWidth: number): number {
    const len = books.length
    const dp = new Array(len + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i < len; i++) {
        let maxHeight = 0, curWidth = 0
        for (let j = i; j >= 0; j--) {
            curWidth += books[j][0]
            if (curWidth > shelfWidth) {
                break
            }
            maxHeight = Math.max(maxHeight, books[j][1])
            dp[i + 1] = Math.min(dp[i + 1], dp[j] + maxHeight)
        }
    }
    return dp[len]
};