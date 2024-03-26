// @algorithm @lc id=3228 lang=typescript 
// @title maximum-size-of-a-set-after-removals
// @test([1,2,1,2],[1,1,1,1])=2
// @test([1,2,3,4,5,6],[2,3,2,3,2,3])=5
// @test([1,1,2,2,3,3],[4,4,5,5,6,6])=6
function maximumSetSize(nums1: number[], nums2: number[]): number {
    const s1: Set<number> = new Set(nums1);
    const s2: Set<number> = new Set(nums2);
    const n = nums1.length;
    let [a, b, c] = [0, 0, 0];
    for (const x of s1) {
        if (!s2.has(x)) {
            ++a;
        }
    }
    for (const x of s2) {
        if (!s1.has(x)) {
            ++b;
        } else {
            ++c;
        }
    }
    a = Math.min(a, n >> 1);
    b = Math.min(b, n >> 1);
    return Math.min(a + b + c, n);
}