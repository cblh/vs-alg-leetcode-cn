// @algorithm @lc id=407 lang=typescript 
// @title trapping-rain-water-ii
// @test([[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]])=4
// @test([[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]])=10
import {
    PriorityQueue,
  } from '@datastructures-js/priority-queue'; 
function trapRainWater(heightMap: number[][]): number {
    const m = heightMap.length,
        n = heightMap[0].length
    const vis = new Array(m).fill(0).map(() => new Array(n).fill(false))
    const pq = new PriorityQueue({compare: (a, b) => a[0] - b[0]})
    for (let i = 0; i < m ; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                pq.enqueue([heightMap[i][j], i, j])
                vis[i][j] = true
            }
        }
    }
    let ans = 0
    const dirs = [-1, 0, 1, 0, -1]
    while (!pq.isEmpty()) {
        const p = pq.dequeue()
        for (let k = 0; k < 4; k++) {
            const x = p[1] + dirs[k], y = p[2] + dirs[k + 1]
            if (x >= 0 && x < m && y >= 0 && y < n && !vis[x][y]) {
                ans += Math.max(0, p[0] - heightMap[x][y])
                vis[x][y] = true
                pq.enqueue([Math.max(p[0], heightMap[x][y]), x, y])
            }
        }
    }
    return ans
};