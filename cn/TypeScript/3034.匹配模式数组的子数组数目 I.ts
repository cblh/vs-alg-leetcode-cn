// @algorithm @lc id=3269 lang=typescript 
// @title number-of-subarrays-that-match-a-pattern-i
// @test([1,2,3,4,5,6],[1,1])=4
// @test([1,4,4,1,3,5,5,3],[1,0,-1])=2
function countMatchingSubarrays(nums: number[], pattern: number[]): number {
    const n = nums.length
    const patternCount = pattern.length
    const numsDiff = new Array(n)
    for (let i = 1; i < n; i++) {
        const diff = nums[i] - nums[i - 1]
        numsDiff[i - 1] = diff > 0 ? 1 : (diff === 0 ? 0 : -1)
    }
    let right = 0,
    ans = 0
    while (right < n) {
        if (right >= patternCount) {
            let result = true
            for (let i = patternCount; i > 0; i--) {
                result = result && numsDiff[right - i] === pattern[patternCount - i]
            }
            if (result) {
                ans++
            }
        }
        right++
    }
    return ans
};
