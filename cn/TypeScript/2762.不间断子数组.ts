// @algorithm @lc id=2868 lang=typescript 
// @title continuous-subarrays
// @test([5,4,2,4])=8
// @test([1,2,3])=6
// @test([31,30,31,32])=10
function continuousSubarrays(nums) {
    let max = nums[0];
    let min = nums[0];
    let ans = 0;
    let l = -1;
    for(let r = 0; r < nums.length; r++) {
        if(nums[r] >= min && nums[r] <= max) {
            ans += r - l;
            continue
        }
        max = nums[r];
        min = nums[r];
        l = r - 1;
        while(l >= 0) {
            if(max - nums[l] > 2 || nums[l] - min > 2) {
                break;
            }
            max = Math.max(max, nums[l]);
            min = Math.min(min, nums[l]);
            l--
        }
        ans += r - l;
    }
    return ans;
 };