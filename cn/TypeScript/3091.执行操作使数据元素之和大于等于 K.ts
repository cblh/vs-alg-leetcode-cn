// @algorithm @lc id=3328 lang=typescript 
// @title apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k
// @test(11)=5
// @test(1)=0
function minOperations(k: number): number {
    let ans = Infinity
    for (let m = 1; m < k + 1; m++) {
        ans = Math.min(ans, m - 1 + Math.floor((k - 1) / m))
    }
    return ans
};