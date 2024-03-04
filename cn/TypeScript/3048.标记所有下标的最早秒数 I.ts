// @algorithm @lc id=3292 lang=typescript 
// @title earliest-second-to-mark-indices-i
// @test([2,2,0],[2,2,2,2,3,2,2,1])=8
// @test([1,3],[1,1,1,2,1,1,1])=6
// @test([0,1],[2,2,2])=-1
function earliestSecondToMarkIndices(nums: number[], changeIndices: number[]): number {
    const n = nums.length;
    const map = new Map();
    const m = changeIndices.length;
    const del = new Set();
    for (let i = 0; i < m; ++i) {
        const pre = map.get(changeIndices[i]);
        if (pre !== undefined) {
            del.add(pre);
        }
        map.set(changeIndices[i], i);
        if (map.size === n) {
            if (check(del, i)) {
                return i + 1;
            }
        }
    }
    
    function check(del, end) {
        let can = 0;
        for (let j = 0; j <= end; ++j) {
            if (del.has(j)) {
                can++;
            } else {
                if (can >= nums[changeIndices[j] - 1]) {
                    can -= nums[changeIndices[j] - 1];
                } else {
                    return false;
                }
            }
        }
        return true;
    }
    return -1;
};