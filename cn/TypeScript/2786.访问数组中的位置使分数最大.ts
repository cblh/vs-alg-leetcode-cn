// @algorithm @lc id=2893 lang=typescript 
// @title visit-array-positions-to-maximize-score
// @test([2,3,6,1,9,2],5)=13
// @test([2,4,6,8],3)=20
function maxScore(nums: number[], x: number): number {
    const n = nums.length
    const f: number[] =  Array.from({ length: 2 }, () => -Infinity)
    f[nums[0] & 1] = nums[0]
    for (let i = 1; i < n; i++) {
        f[nums[i] & 1] = Math.max(f[nums[i] & 1] + nums[i], f[(nums[i] & 1) ^ 1] + nums[i] - x);
    }
    return Math.max(...f)
};