// @algorithm @lc id=993 lang=typescript 
// @title tallest-billboard
// @test([1,2,3,6])=6
// @test([1,2,3,4,5,6])=10
// @test([1,2])=0
function tallestBillboard(rods: number[]): number {
    let dp: { [key: number]: number } = { 0: 0 };
    for (let i of rods) {
        // 在TypeScript中，对象的浅拷贝可以通过展开运算符(...)实现  
        let dp1 = { ...dp };
        for (let k of Object.keys(dp1).map(Number)) {
            // 注意：在TypeScript中，我们需要使用Number来将字符串键转换为数字键  
            dp[k + i] = Math.max((dp[k + i] || 0), dp1[k] + i);
            dp[k - i] = Math.max((dp[k - i] || 0), dp1[k]);
        }
    }
    return dp[0];
};