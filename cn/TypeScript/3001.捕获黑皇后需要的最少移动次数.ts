// @algorithm @lc id=3270 lang=typescript 
// @title minimum-moves-to-capture-the-queen
// @test(1,1,8,8,2,3)=2
// @test(5,3,3,4,5,2)=1
// @test(4, 3, 3, 4, 5, 2)=2
// @test(4, 3, 3, 4, 2, 5)=1
function minMovesToCaptureTheQueen(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
): number {
    const dirs: number[][] = [
        [-1, 0, 1, 0, -1],
        [-1, 1, 1, -1, -1],
    ];
    const check = (i: number, sx: number, sy: number, bx: number, by: number): boolean => {
        for (let d = 0; d < 4; ++d) {
            for (let k = 1; k < 8; ++k) {
                const x = sx + dirs[i][d] * k;
                const y = sy + dirs[i][d + 1] * k;
                if (x < 1 || x > 8 || y < 1 || y > 8) {
                    break;
                }
                if (x === bx && y === by) {
                    break;
                }
                if (x === e && y === f) {
                    return true;
                }
            }
        }
        return false;
    };
    return check(0, a, b, c, d) || check(1, c, d, a, b) ? 1 : 2;
}
function minMovesToCaptureTheQueen2(a: number, b: number, c: number, d: number, e: number, f: number): number {
    let ans = (a === e ? 0 : 1) + (b === f ? 0 : 1) + (c === e ? 1 : 0) + (d === f ? 1 : 0)
    ans = Math.min(ans, (Math.abs(c - e) === Math.abs(d - f) ? 1 : 2) + (Math.abs(c - a) === Math.abs(d - b) ? 1 : 0))
    return ans
};