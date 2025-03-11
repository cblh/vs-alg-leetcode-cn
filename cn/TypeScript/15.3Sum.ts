// @algorithm @lc id=15 lang=typescript
// @title 3sum
// @test([-1,0,1,2,-1,-4])=[[-1,-1,2],[-1,0,1]]
// @test([0,1,1])=[]
// @test([0,0,0])=[[0,0,0]]
function threeSum(nums: number[]): number[][] {
  nums.sort((x, y) => x - y);
  const n = nums.length;
  const ans: number[][] = [];
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const target = -nums[i];
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        ans.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;
}
