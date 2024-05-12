// @algorithm @lc id=3419 lang=typescript 
// @title maximum-points-inside-the-square
// @test([[2,2],[-1,-2],[-4,4],[-3,1],[3,-3]],"abdca")=2
// @test([[1,1],[-2,-2],[-2,2]],"abb")=1
// @test([[1,1],[-1,-1],[2,-2]],"ccd")=0
function maxPointsInsideSquare(points: number[][], s: string): number {
    const n = points.length
    let left = 0,
        right = 10e9
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2)
        if (check(points, s, mid)) {
            left = mid
        } else {
            right = mid - 1
        }
    }
    return calcPointsCount(points, s, right).length
};
function check(points: number[][], s: string, len: number) {
    const filtered = calcPointsCount(points, s, len)
    return filtered.length === new Set(filtered.map(([,,char]) => char)).size
}
function calcPointsCount(points: number[][], s: string, len: number): any[][] {
    return points.map(([x, y], index) => {
        return [x, y, s[index]]
    }).filter(([x, y], index) => {
        return len >= Math.abs(x as number) && len >= Math.abs(y as number)
    })
}