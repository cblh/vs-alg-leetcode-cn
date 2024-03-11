// @algorithm @lc id=3347 lang=typescript 
// @title distribute-elements-into-two-arrays-i
// @test([2,1,3])=[2,3,1]
// @test([5,4,3,8])=[5,3,4,8]
function resultArray(nums: number[]): number[] {
    let arr1: number[] = [],
    arr2: number[] = []
    const len = nums.length
    arr1[0] = nums[0]
    arr2[0] = nums[1]
    for (let i = 2; i < len; i++) {
        const num = nums[i]
        if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
            arr1[arr1.length] = num
        } else {
            arr2[arr2.length] = num
        }
    }
    return arr1.concat(arr2)
};