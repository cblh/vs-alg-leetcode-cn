// @algorithm @lc id=3446 lang=typescript 
// @title find-the-number-of-good-pairs-i
// @test([1,3,4],[1,3,4],1)=5
// @test([1,2,4,12],[2,4],3)=2
function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
    let ans = 0
    nums1.forEach(num1 => {
        nums2.forEach(num2 => {
            ans += (num1 % (num2 * k) === 0) ? 1 : 0
        })
    })
    return ans
};