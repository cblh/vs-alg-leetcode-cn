// @algorithm @lc id=89 lang=typescript 
// @title gray-code
// @test(2)=[0,1,3,2]
// @test(1)=[0,1]
function grayCode(n: number): number[] {
    const ans: number[] = []
    for (let i = 0; i < 1 << n; i++) {
        console.log(i, i >> 1, i ^ (i >> 1))
        ans.push(i ^ (i >> 1))
    }
    return ans
};