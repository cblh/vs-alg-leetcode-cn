// @algorithm @lc id=2488 lang=typescript 
// @title divide-intervals-into-minimum-number-of-groups
// @test([[5,10],[6,8],[1,5],[2,3],[1,10]])=3
// @test([[1,3],[5,6],[8,10],[11,13]])=1
function minGroups(intervals: number[][]): number {
    intervals.sort((a, b) => a[0] - b[0])
    const q = new PriorityQueue({
        compare: (e1, e2) => {
            return e1 - e2
        }
    })
    for (const e of intervals) {
        if (!q.isEmpty() && q.front() < e[0]) {
            q.dequeue()
        }
        q.enqueue(e[1])
    }
    return q.size()
};