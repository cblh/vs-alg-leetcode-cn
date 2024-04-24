// @algorithm @lc id=2866 lang=typescript 
// @title longest-even-odd-subarray-with-threshold
// @test([3,2,5,4],5)=3
// @test([1,2],2)=1
// @test([2,3,4,5],4)=3
function longestAlternatingSubarray(nums: number[], threshold: number): number {
    const n = nums.length;
    let ans = 0, i = 0
    while (i < n) {
        if (nums[i] > threshold || nums[i] % 2 !== 0) {
            i++
            continue
        }
        let start = i
        i++
        while (i < n && nums[i] <= threshold && nums[i] % 2 !== nums[i - 1] % 2) {
            i++
        }
        ans = Math.max(ans, i - start)
    }
    return ans
};