// @algorithm @lc id=3219 lang=typescript 
// @title make-lexicographically-smallest-array-by-swapping-elements
// @test([1,5,3,9,8],2)=[1,3,5,8,9]
// @test([1,7,6,18,2,1],3)=[1,6,7,18,1,2]
// @test([1,7,28,19,10],3)=[1,7,28,19,10]
// @test([101,613,303,287,442,524,774,434,373,410,420,572,718,813,700], 15)=[101,613,303,287,410,524,774,420,373,434,442,572,718,813,700]
function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    const n = nums.length
    let i = 0
    const ids = Array.from({ length: n }, (_, k) => k)
    ids.sort((i, j) => nums[i] - nums[j])
    const ans = Array.from({ length: n }, () => 0)
    while (i < n) {
        const start = i
        i++
        while (i < n && nums[ids[i]] - nums[ids[i - 1]] <= limit) {
            i++
        }
        const subIds = ids.slice(start, i)
        subIds.sort((a, b) => a - b)
        for (let j = 0; j < subIds.length; j++) {
            ans[subIds[j]] = nums[ids[start + j]]
        }
    }
    return ans
};