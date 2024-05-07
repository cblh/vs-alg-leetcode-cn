// @algorithm @lc id=2878 lang=typescript 
// @title apply-operations-to-make-all-array-elements-equal-to-zero
// @test([2,2,3,1,1,0],3)=true
// @test([1,3,1,1],2)=false
function checkArray(nums: number[], k: number): boolean {
    const n = nums.length
    const diff = Array(n + 1).fill(0)
    let s = 0
    for (let i = 0; i < n; i++) {
        s += diff[i]
        nums[i] += s
        if (nums[i] === 0) {
            continue
        }
        if (nums[i] < 0 || i + k > n) {
            return false
        }
        s -= nums[i]
        diff[i + k] += nums[i] 
    }
    return true
};
