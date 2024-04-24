// @algorithm @lc id=3214 lang=typescript 
// @title maximize-area-of-square-hole-in-grid
// @test(2,1,[2,3],[2])=4
// @test(1,1,[2],[2])=4
// @test(2,3,[2,3],[2,4])=4
function maximizeSquareHoleArea(n: number, m: number, hBars: number[], vBars: number[]): number {
    return Math.min(f(hBars), f(vBars)) ** 2
};

function f(nums: number[]) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    let i = 0
    let ans = 0
    while (i < n) {
        const start = i
        i++
        while (i < n && nums[i] - nums[i - 1] === 1) {
            i++
        }
        ans = Math.max(ans, i - start)
    }
    return ans + 1
}