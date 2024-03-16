// @algorithm @lc id=3278 lang=typescript 
// @title find-the-number-of-ways-to-place-people-i
// @test([[1,1],[2,2],[3,3]])=0
// @test([[6,2],[4,4],[2,6]])=2
// @test([[3,1],[1,3],[1,1]])=2
function numberOfPairs(points: number[][]): number {
    points.sort((a, b) => (a[0] === b[0]) ? b[1] - a[1] : a[0] - b[0])
    const n = points.length
    let ans = 0
    for (let i = 0; i < n; i++) {
        const [_, y1] = points[i]
        let maxY = -Infinity
        for (let j = i + 1; j < n; j++) {
            const [_, y2] = points[j]
            if (maxY < y2 && y2 <= y1) {
                ans++
                maxY = y2
            }
        }
    }
    return ans
};