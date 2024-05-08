// @algorithm @lc id=1458 lang=typescript 
// @title sort-integers-by-the-number-of-1-bits
// @test([0,1,2,3,4,5,6,7,8])=[0,1,2,4,8,3,5,6,7]
// @test([1024,512,256,128,64,32,16,8,4,2,1])=[1,2,4,8,16,32,64,128,256,512,1024]
function sortByBits(arr: number[]): number[] {
    function countOnes(n: number): number {
        let ans = 0
        while (n) {
            n &= (n - 1)
            ans++
        }
        return ans
    }
    return arr.sort((a, b) => countOnes(a) - countOnes(b) || a - b)
};