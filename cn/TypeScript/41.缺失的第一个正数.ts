// @algorithm @lc id=41 lang=typescript 
// @title first-missing-positive
// @test([1,2,0])=3
// @test([3,4,-1,1])=2
// @test([7,8,9,11,12])=1
// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
function firstMissingPositive(nums: number[]): number {
    const n = nums.length
    for (let i = 0; i < n; i++) {
        while (nums[i] >= 1 && nums[i] <=n && nums[i] !== nums[nums[i] - 1]) {
            swap(nums, nums[i] - 1, i)
        }
    }
    for (let i = 0; i < n; i++) {
        if (i + 1 !== nums[i]) {
            return i + 1
        }
    }
    return n + 1
};
function swap(nums: number[], i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}