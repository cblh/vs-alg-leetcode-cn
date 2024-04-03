// @algorithm @lc id=47 lang=typescript 
// @title permutations-ii
// @test([1,1,2])=[[1,1,2],[1,2,1],[2,1,1]]
// @test([1,2,3])=[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function permuteUnique(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const visited = new Set()
    const res: number[][] = []
    const n = nums.length
    function dfs(path: number[]) {
        if (path.length === n) {
            res.push(path)
            return
        }
        for (let i = 0; i < n; i++) {
            if ((i > 0 && nums[i] === nums[i - 1] && !visited.has(i - 1))) {
                continue
            }
            if (!visited.has(i)) {
                visited.add(i)
                dfs([...path, nums[i]])
                visited.delete(i)
            }
        }
    }
    dfs([])
    return res
};