// @algorithm @lc id=1 lang=typescript 
// @title two-sum
// @test([2,7,11,15],9)=[0,1]
// @test([3,2,4],6)=[1,2]
// @test([3,3],6)=[0,1]
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    const n = nums.length
    for (let i = 0; i < n; i ++) {
        const diff = target - nums[i];
        const left = map.get(diff);
        if (left !== undefined) {
            return [left, i]
        } else {
            map.set(nums[i], i)
        }
    }
};