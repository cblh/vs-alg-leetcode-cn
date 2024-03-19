// @algorithm @lc id=3367 lang=typescript 
// @title find-the-sum-of-encrypted-integers
// @test([1,2,3])=6
// @test([10,21,31])=66
function sumOfEncryptedInt(nums: number[]): number {
    let ans = 0
    for (const num of nums) {
        const arr = String(num).split('').map((num) => parseInt(num))
        const max = Math.max(...arr)
        
        ans += parseInt(Array.from( { length: arr.length }, () => max ).join(''))
    }
    return ans
};