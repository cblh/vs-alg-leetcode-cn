// @algorithm @lc id=3186 lang=typescript 
// @title minimum-sum-of-mountain-triplets-ii
// @test([8,6,1,5,3])=9
// @test([5,4,8,7,10,2])=13
// @test([6,5,4,3,4,5])=-1
function minimumSum(nums: number[]): number {
    const n = nums.length;
    const suf = Array(n)
    suf[n - 1] = nums[n - 1]
    for (let i = n - 2; i > 1; i--) {
        suf[i] = Math.min(suf[i + 1], nums[i])
    }

    let pre = nums[0]
    let ans = Infinity
    for (let j = 1; j < n - 1; j++) {
        if (pre < nums[j] && nums[j] > suf[j + 1]) {
            ans = Math.min(ans, pre + nums[j] + suf[j + 1])
        }
        pre = Math.min(pre, nums[j])
    }
    return ans === Infinity ? -1 : ans
};