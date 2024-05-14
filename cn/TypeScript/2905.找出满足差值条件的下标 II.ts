// @algorithm @lc id=3170 lang=typescript 
// @title find-indices-with-index-and-value-difference-ii
// @test([5,1,4,1],2,4)=[0,3]
// @test([2,1],0,0)=[0,0]
// @test([1,2,3],2,4)=[-1,-1]
function findIndices(nums: number[], indexDifference: number, valueDifference: number): number[] {
    let [mi, mx] = [0, 0]
    const n = nums.length
    for (let i = indexDifference; i < n; i++) {
        const j = i - indexDifference
        if (nums[j] < nums[mi]) {
            mi = j
        }
        if (nums[j] > nums[mx]) {
            mx = j
        }
        if (nums[i] - nums[mi] >= valueDifference) {
            return [mi, i]
        }
        if (nums[mx] - nums[i] >= valueDifference) {
            return [mx, i]
        }
    }
    return [-1, -1]
};