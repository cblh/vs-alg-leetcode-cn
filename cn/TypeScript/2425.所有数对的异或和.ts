// @algorithm @lc id=2533 lang=typescript 
// @title bitwise-xor-of-all-pairings
// @test([2,1,3],[10,2,5,0])=13
// @test([1,2],[3,4])=0
function xorAllNums(nums1: number[], nums2: number[]): number {
    let ans = 0;
    if (nums2.length % 2 === 1) {
        ans ^= nums1.reduce((a, b) => a ^ b)
    }
    if (nums1.length % 2 === 1) {
        ans ^= nums2.reduce((a, b) => a ^ b)
    }
    return ans;
};