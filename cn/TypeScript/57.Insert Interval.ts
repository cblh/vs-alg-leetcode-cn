// @algorithm @lc id=57 lang=typescript
// @title insert-interval
// @test([[1,3],[6,9]],[2,5])=[[1,5],[6,9]]
// @test([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8])=[[1,2],[3,10],[12,16]]
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const ans: number[][] = [];
  let i = 0;
  const [newL, newR] = newInterval;
  for (; i < intervals.length; i++) {
    const interval = intervals[i];
    let [l, r] = interval;
    if (r < newL) {
      ans.push(interval);
    } else {
      break;
    }
  }
  const merged = [...newInterval];
  for (; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] <= newR) {
      merged[0] = Math.min(merged[0], interval[0]);
      merged[1] = Math.max(merged[1], interval[1]);
    } else {
      break;
    }
  }
  ans.push(merged, ...intervals.slice(i, intervals.length));
  return ans;
}
