// @algorithm @lc id=3387 lang=typescript 
// @title minimum-operations-to-make-median-of-array-equal-to-k
// @test([2,5,6,8,5],4)=2
// @test([2,5,6,8,5],7)=3
// @test([1,2,3,4,5,6],4)=0
// @test([7,62,90,68,88], 62)=6
function minOperationsToMakeMedianK(nums: number[], k: number): number {
    nums.sort((a, b) => a - b)
    const m = Math.floor(nums.length / 2)
    let ans = 0
    if (nums[m] > k) {
        for (let i = m; i >= 0 && nums[i] > k; i--) {
            ans += nums[i] - k
        }
    } else {
        for (let i = m; i < nums.length && nums[i] < k; i++) {
            ans += k - nums[i]
        }
    }
    return ans
};