// @algorithm @lc id=447 lang=typescript 
// @title number-of-boomerangs
// @test([[0,0],[1,0],[2,0]])=2
// @test([[1,1],[2,2],[3,3]])=2
// @test([[1,1]])=0
function numberOfBoomerangs(points: number[][]): number {
    let ans = 0
    for (const [x1, y1] of points) {
        const cnt = new Map()
        for (const [x2, y2] of points) {
            const d = (x1 - x2) ** 2 + (y1 - y2) ** 2
            cnt.set(d, (cnt.get(d) ?? 0) + 1)
        }
        for (const [_, x] of cnt) {
            ans += x * (x - 1)
        }
    }
    return ans
};