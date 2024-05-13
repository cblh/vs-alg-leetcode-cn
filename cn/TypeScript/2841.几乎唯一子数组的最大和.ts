// @algorithm @lc id=2954 lang=typescript 
// @title maximum-sum-of-almost-unique-subarray
// @test([2,6,7,3,1,7],3,4)=18
// @test([5,9,9,2,4,5,4],1,3)=23
// @test([1,2,1,2,1,2,1],3,3)=0
// @test([1,1,1,3], 2, 2)=4
function maxSum(nums: number[], m: number, k: number): number {
    let left = 0,
        right = 0
    const n = nums.length
    const win = new Map()
    let count = 0
    let ans = 0
    while (right < n) {
        const num = nums[right]
        win.set(num, (win.get(num) ?? 0) + 1)
        count += num
        if (right - left > k - 1) {
            const toDelete = nums[left]
            win.set(toDelete, (win.get(toDelete) ?? 0) - 1)
            count -= toDelete
            if (win.get(toDelete) === 0) {
                win.delete(toDelete)
            }
            left++
        }
        if (right - left === k - 1 && win.size >= m) {
            ans = Math.max(ans, count)
        }
        right++
    }
    return ans
};