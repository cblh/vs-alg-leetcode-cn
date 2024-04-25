// @algorithm @lc id=1020 lang=typescript 
// @title longest-turbulent-subarray
// @test([9,4,2,10,7,8,8,1,9])=5
// @test([4,8,12,16])=2
// @test([100])=1
function maxTurbulenceSize(arr: number[]): number {
    let f = 1
    let g = 1
    let ans = 1
    const n = arr.length
    for (let i = 1; i < n; i++) {
        const ff = arr[i - 1] < arr[i] ? g + 1 : 1
        const gg = arr[i - 1] > arr[i] ? f + 1 : 1
        f = ff
        g = gg
        ans = Math.max(ans, f, g)
    }
    return ans
};