// @algorithm @lc id=2016 lang=typescript
// @title reduction-operations-to-make-the-array-elements-equal
// @test([5,1,3])=3
// @test([1,1,1])=0
// @test([1,1,2,2,3])=4
// @test([27664,47570,27664,27664,27664,27664,27664,27664,27664,27664])=1
function reductionOperations(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let cnt = 0
  let ans = 0

  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
        cnt++
    }
    ans += cnt
  }
  return ans
}
