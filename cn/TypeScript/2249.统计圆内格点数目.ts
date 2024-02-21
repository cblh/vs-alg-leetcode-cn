// @algorithm @lc id=2332 lang=typescript 
// @title count-lattice-points-inside-a-circle
// @test([[2,2,1]])=5
// @test([[2,2,2],[3,4,1]])=16// @algorithm @lc id=2249 lang=typescript 
// @title count-lattice-points-inside-a-circle
// @test([[2,2,1]])=5
// @test([[2,2,2],[3,4,1]])=16
function countLatticePoints(circles: number[][]): number {
    let ans = 0
    circles.sort((x, y) => y[2] - x[2])
    const maxX = Math.max(...circles.map(c => c[0] + c[2])),
    maxY = Math.max(...circles.map(c => c[1] + c[2]))
    for (let i = 0; i < maxX + 1; i++) {
        for (let j = 0; j < maxY + 1; j++) {
            for (const [x, y, r] of circles) {
                if ((x - i) ** 2  + (y - j) ** 2 <= r ** 2) {
                    ans++
                    break
                }
            }
        }
    }
    return ans
};