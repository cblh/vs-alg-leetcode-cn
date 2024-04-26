// @algorithm @lc id=3152 lang=typescript 
// @title maximum-value-of-an-ordered-triplet-ii
// @test([12,6,1,2,7])=77
// @test([1,10,3,4,19])=133
// @test([1,2,3])=0
function maximumTripletValue(nums: number[]): number {
    const n = nums.length
    const suf = Array(n)
    suf[n - 1] = nums[n - 1]
    for (let i = n - 2; i > 1; i--) {
        suf[i] = Math.max(suf[i + 1], nums[i])
    }

    let ans = -Infinity
    let pre = nums[0]
    for (let j = 1; j < n - 1; j++) {
        if (pre > nums[j]) {
            ans = Math.max(ans, (pre - nums[j]) * suf[j + 1])
        }
        pre = Math.max(pre, nums[j])
    }
    return ans === -Infinity ? 0 : ans
};