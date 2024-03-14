// @algorithm @lc id=3320 lang=typescript 
// @title maximum-number-of-operations-with-the-same-score-i
// @test([3,2,1,4,5])=2
// @test([3,2,6,1,4])=1
// @test([2,2,3,2,4,2,3,3,1,3])=1
function maxOperations(nums: number[]): number {
    let operationScore: number | null = null
    let ans = 0
    while (nums.length > 1) {
        const [left, right] = [nums.shift()!, nums.shift()!]
        if (typeof operationScore === 'number') {
            if (operationScore === left + right) {
                ans++
            } else {
                break
            }
        } else {
            operationScore = left + right
            ans++
        }
    }
    return ans
};