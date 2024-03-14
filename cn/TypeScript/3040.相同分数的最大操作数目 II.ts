// @algorithm @lc id=3318 lang=typescript 
// @title maximum-number-of-operations-with-the-same-score-ii
// @test([3,2,1,2,3,4])=3
// @test([3,2,6,1,4])=2
function maxOperations(nums: number[]): number {
    const n = nums.length
    const f: number[][] = Array.from({ length: n}, () => Array.from({ length: n}))

    function g(i: number, j: number, s: number) {
        f.forEach(row => row.fill(-1))
        function dfs(i: number, j: number): number {
            if (j - i < 1) {
                return 0
            }
            if (f[i][j] !== -1) {
                return f[i][j]
            }
            let ans = 0
            if (nums[i] + nums[j] === s) {
                ans = Math.max(ans, 1 + dfs(i + 1, j - 1))
            }
            if (nums[i] + nums[i + 1] === s) {
                ans = Math.max(ans, 1 + dfs(i + 2, j))
            }
            if (nums[j - 1] + nums[j] === s) {
                ans = Math.max(ans, 1 + dfs(i, j - 2))
            }
            f[i][j] = ans
            return ans
        }
        return dfs(i, j)
    }
    const a = g(1, n - 2, nums[0] + nums[n - 1])
    const b = g(0, n - 3, nums[n - 2] + nums[n - 1])
    const c = g(2, n - 1, nums[0] + nums[1])
    return Math.max(a, b, c) + 1
}