// @algorithm @lc id=287 lang=typescript 
// @title find-the-duplicate-number
// @test([1,3,4,2,2])=2
// @test([3,1,3,4,2])=3
// @test([3,3,3,3,3])=3
function findDuplicate(nums: number[]): number {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        const mid = (l + r) >> 1;
        let cnt = 0;
        for (const v of nums) {
            if (v <= mid) {
                cnt++
            }
        }
        if (cnt > mid) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return l;
}