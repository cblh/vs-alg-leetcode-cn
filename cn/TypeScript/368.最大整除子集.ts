// @algorithm @lc id=368 lang=typescript 
// @title largest-divisible-subset
// @test([1,2,3])=[1,2]
// @test([1,2,4,8])=[1,2,4,8]
function largestDivisibleSubset(nums: number[]): number[] {
    const len = nums.length,
    dp = new Array(len).fill(1),
    cache: number[][] = new Array(len).fill(1).map(() => [])
    nums.sort((x, y) => x - y)
    let max: number[] = []
    for (let i = 0; i < len; i++) {
        let bestMatch: number[] = []
        for (let j = 0; j < len; j++) {
            if (nums[i] % nums[j] === 0) {
                if (cache[j].length >= bestMatch.length) {
                    bestMatch = cache[j]
                }
            }
        }
        cache[i] = bestMatch.concat(nums[i])
        if (cache[i].length > max.length) {
            max = cache[i]
        }
    }
    return max
};