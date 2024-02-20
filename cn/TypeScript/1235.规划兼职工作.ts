// @algorithm @lc id=1352 lang=typescript 
// @title maximum-profit-in-job-scheduling
// @test([1,2,3,3],[3,4,5,6],[50,10,40,70])=120
// @test([1,2,3,4,6],[3,5,10,6,9],[20,20,100,70,60])=150
// @test([1,1,1],[2,3,4],[5,6,4])=6
function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    const n = startTime.length,
    dp = new Array(n + 1).fill(0),
    jobs: [number, number, number][] = new Array(n).fill(0).map((_, i) => [startTime[i], endTime[i], profit[i]] as [number, number, number]).sort((x, y) => x[1] - y[1])

    for (let i = 1; i <=n; i++) {
        const k = binarySearch(jobs, i-1, jobs[i-1][0])
        dp[i] = Math.max(dp[i - 1], dp[k] + jobs[i - 1][2])
    }
    return dp[n]
};
function binarySearch(jobs: [number, number, number][], right: number, target: number){
    let left = 0
    while (left < right) {
        const middle = Math.floor((left + right) / 2),
        pivot = jobs[middle]
        if (pivot[1] > target) {
            right = middle
        } else {
            left = middle + 1
        }
    }
    return left
}