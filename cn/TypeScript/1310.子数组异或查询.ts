// @algorithm @lc id=1435 lang=typescript 
// @title xor-queries-of-a-subarray
// @test([1,3,4,8],[[0,1],[1,2],[0,3],[3,3]])=[2,7,14,8]
// @test([4,8,2,10],[[2,3],[1,3],[0,0],[0,3]])=[8,0,4,4]
function xorQueries(arr: number[], queries: number[][]): number[] {
    const n = arr.length
    const s = new Array(n + 1).fill(0)
    for (let i = 0; i < n; i++) {
        s[i + 1] = s[i] ^ arr[i]
    }
    const ans: number[] = []
    for (const [l, r] of queries) {
        ans.push(s[l] ^ s[r + 1])
    }
    return ans
};