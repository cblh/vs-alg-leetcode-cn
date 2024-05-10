// @algorithm @lc id=477 lang=typescript 
// @title total-hamming-distance
// @test([4,14,2])=6
// @test([4,14,4])=4
function totalHammingDistance(nums: number[]): number {
    let ans = 0;
    const n = nums.length
    for (let i = 0; i < 32; i++) {
        const b = nums.filter(a => (a >> i) & 1).length
        ans += b * (n - b)
    }
    return ans;
};