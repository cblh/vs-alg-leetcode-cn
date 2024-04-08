// @algorithm @lc id=386 lang=typescript 
// @title lexicographical-numbers
// @test(13)=[1,10,11,12,13,2,3,4,5,6,7,8,9]
// @test(2)=[1,2]
function lexicalOrder(n: number): number[] {
    const ans: number[] = []
    function dfs(u: number) {
        if (u > n) {
            return
        }
        ans.push(u)
        for (let i = 0; i < 10; i++) {
            dfs(u * 10 + i)
        }
    }
    for (let i = 1; i < 10; i++) {
        dfs(i)
    }
    return ans
};