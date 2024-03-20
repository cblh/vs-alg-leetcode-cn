// @algorithm @lc id=3351 lang=typescript 
// @title maximize-happiness-of-selected-children
// @test([1,2,3],2)=4
// @test([1,1,1,1],2)=1
// @test([2,3,4,5],1)=5
function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a, b) => b - a)
    let ans = 0
    for (let i = 0; i < k; i++) {
        const happy = happiness[i]
        ans += Math.max(happy - i, 0)
    }
    return ans
};