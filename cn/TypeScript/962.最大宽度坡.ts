// @algorithm @lc id=1002 lang=typescript 
// @title maximum-width-ramp
// @test([6,0,8,2,1,5])=4
// @test([9,8,1,0,1,9,4,0,4,1])=7
function maxWidthRamp(nums: number[]): number {
    const n = nums.length
    const stack: number[] = []
    let ans = 0
    for (let i = 0; i < n; i++) {
        if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
            stack.push(i)
        }
        
    }
    for (let i = n - 1; i >= 0; i--) {
        const num = nums[i]
        while (stack.length > 0 && num >= nums[stack[stack.length - 1]]) {
            ans = Math.max(ans, i - stack.pop());
        }
        if (stack.length === 0) {
            break
        }
    }
    return ans
};
