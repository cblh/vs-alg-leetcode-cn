// @algorithm @lc id=69 lang=typescript 
// @title sqrtx
// @test(4)=2
// @test(8)=2
function mySqrt(x: number): number {
    let left = 0,
        right = x
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2)
        const pivot = mid * mid
        if (pivot > x) {
            right = mid - 1
        } else {
            left = mid
        }
    }
    return left
};