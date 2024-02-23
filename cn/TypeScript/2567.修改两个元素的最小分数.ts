// @algorithm @lc id=2706 lang=typescript 
// @title minimum-score-by-changing-two-elements
// @test([1,4,3])=0
// @test([1,4,7,8,5])=3
function minimizeSum(nums: number[]): number {
    const sorted = nums.sort((a, b) => a - b);
    
    const n = sorted.length
    return Math.min(sorted[n - 1] - sorted[2], sorted[n - 3] - sorted[0], sorted[n - 2] - sorted[1])
  };