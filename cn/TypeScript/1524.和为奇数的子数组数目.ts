// @algorithm @lc id=1631 lang=typescript 
// @title number-of-sub-arrays-with-odd-sum
// @test([1,3,5])=4
// @test([2,4,6])=0
// @test([1,2,3,4,5,6,7])=16
function numOfSubarrays(arr: number[]): number {
    let ans = 0;
    let prefixSum = 0
    const cnt = [1, 0]
    const mod = 1e9 + 7
    for (const num of arr) {
        prefixSum += num
        ans = (ans + cnt[(prefixSum & 1) ^ 1]) % mod
        cnt[prefixSum & 1]++
    }
    return ans
}