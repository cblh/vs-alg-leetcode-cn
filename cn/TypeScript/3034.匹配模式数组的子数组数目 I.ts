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
    let ans = 0
    for (let i = 0; i < n - patternCount; i++) {
        let ok = true
        for (let k = 0; k < patternCount && ok; k++) {
            if (numsDiff[i + k] !== pattern[k]) {
                ok = false
            }
        }
        if (ok) {
            ans++
        }
    }
    return ans
};
