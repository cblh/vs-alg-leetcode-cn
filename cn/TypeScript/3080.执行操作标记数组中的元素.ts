// @algorithm @lc id=3306 lang=typescript 
// @title mark-elements-on-array-by-performing-queries
// @test([1,2,2,1,2,3,1],[[1,2],[3,3],[4,2]])=[8,3,0]
// @test([1,4,2,3],[[0,1]])=[7]
// @test([18,5,5,5,5,18,13,5,10,13,18,13,19,14,14,13,14,13,11], [[6,0],[14,1],[13,3],[7,2],[5,2],[8,1],[5,3],[9,0],[4,2],[4,4],[9,2],[15,0],[1,3],[13,1],[11,0],[16,4],[3,2],[17,3],[11,1]])=[213,194,165,139,95,82,37,37,0,0,0,0,0,0,0,0,0,0,0]
function unmarkedSumArray(nums: number[], queries: number[][]): number[] {
    const n = nums.length
    let sum = nums.reduce((acc, item) => acc + item)
    const mark = Array.from({ length: n }).fill(false)
    const arr = nums.map((num, i) => [num, i]).sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
    let j = 0
    const ans: number[] = []
    for (let [i, k] of queries) {
        if (!mark[i]) {
            mark[i] = true
            sum -= nums[i]
        }
        for (; k && j < n; j++) {
            if (!mark[arr[j][1]]) {
                mark[arr[j][1]] = true
                sum -= arr[j][0]
                k--
            }
        }
        ans.push(sum)
    }
    return ans
}