// @algorithm @lc id=228 lang=typescript 
// @title summary-ranges
// @test([0,1,2,4,5,7])=["0->2","4->5","7"]
// @test([0,2,3,4,6,8,9])=["0","2->4","6","8->9"]
function summaryRanges(nums: number[]): string[] {
    let i = 0
    const n = nums.length
    const ans: Array<string> = []
    while (i < n) {
        const start = i
        while (i + 1 < n && nums[i + 1] - nums[i] === 1) {
            i++
        }
        if (i === start) {
            ans.push(String(nums[start]))
        } else {
            ans.push(nums[start] + '->' + nums[i])
        }
        i++
    }
    return ans
};