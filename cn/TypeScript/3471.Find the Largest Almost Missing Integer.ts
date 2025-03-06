// @algorithm @lc id=3705 lang=typescript 
// @title find-the-largest-almost-missing-integer
// @test([3,9,2,1,7],3)=7
// @test([3,9,7,2,1,7],4)=3
// @test([0,0],1)=-1
function largestInteger(nums: number[], k: number): number {
    if (k === 1) {
        const cnt = new Map<number, number>();
        for (const num of nums) {
            cnt.set(num, (cnt.get(num)??0)+1);
        }
        let ans = -1
        for (const [num, count] of cnt) {
            if (count === 1 && num > ans) {
                ans = num;
            }
        }
        return ans;
    }
    const n = nums.length;
    if (k === n) {
        return Math.max(...nums);
    }
    const func = (k: number): number => {
        for (let i = 0; i < n; i++) {
            if (i !== k && nums[i] === nums[k]) {
                return -1;
            }
        }
        return nums[k];
    }

    return Math.max(func(0), func(n - 1));
};