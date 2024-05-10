// @algorithm @lc id=1993 lang=typescript 
// @title sum-of-all-subset-xor-totals
// @test([1,3])=6
// @test([5,1,6])=28
// @test([3,4,5,6,7,8])=480
function subsetXORSum(nums: number[]): number {
    let ans = 0;
    const n = nums.length;
    for (let i = 0; i < 1 << n; ++i) {
        let s = 0;
        for (let j = 0; j < n; ++j) {
            if ((i >> j) & 1) {
                s ^= nums[j];
            }
        }
        ans += s;
    }
    return ans;
};