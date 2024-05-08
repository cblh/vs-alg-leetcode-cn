// @algorithm @lc id=3183 lang=typescript 
// @title find-the-k-or-of-an-array
// @test([7,12,9,8,9,15],4)=9
// @test([2,12,1,11,4,5],6)=0
// @test([10,8,5,9,11,6,8],1)=15
function findKOr(nums: number[], k: number): number {
    let ans = 0
    for (let i = 0; i < 32; i++) {
        let cnt = 0
        for (const x of nums) {
            cnt += (x >> i) & 1
        }
        if (cnt >= k) {
            ans |= 1 << i
        }
    }
    return ans
}