// @algorithm @lc id=40 lang=typescript 
// @title combination-sum-ii
// @test([10,1,2,7,6,1,5],8)=[[1,1,6],[1,2,5],[1,7],[2,6]]
// @test([2,5,2,1,2],5)=[[1,2,2],[5]]
function combinationSum2(candidates: number[], target: number): number[][] {
    const n = candidates.length
    let ans: number[][] = []
    candidates.sort((a, b) => a - b)
    let path: number[] = []
    function dfs(i: number, toReduce: number) {
        if (toReduce === 0) {
            ans.push([...path])
        }
        if (i > n || toReduce < candidates[i]) {
            return
        }
        for (let j = i; j < n; j++) {
            if (j > i && candidates[j] === candidates[j - 1]) {
                continue
            }
            path.push(candidates[j])
            dfs(j + 1, toReduce - candidates[j])
            path.pop()
        }
   
    }
    dfs(0, target)
    return ans
};