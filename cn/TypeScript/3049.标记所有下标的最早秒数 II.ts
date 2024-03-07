// @algorithm @lc id=3289 lang=typescript
// @title earliest-second-to-mark-indices-ii
// @test([3,2,3],[1,3,2,2,2,2,3])=6
// @test([0,0,1,2],[1,2,1,2,1,2,1,2])=7
// @test([1,2,3],[1,2,3])=-1
// 链表
// 1 -> 2 -> 3
function earliestSecondToMarkIndices(nums: number[], changeIndices: number[]): number {
    const n: number = nums.length
    const m = changeIndices.length
    if (n > m) {
        return -1
    }
    let slow = nums.reduce((x, y) => x + y) + n

    const firstT: number[] = new Array(n).fill(-1)
    for (let i = m - 1; i >= 0; i--) {
        firstT[changeIndices[i] - 1] = i
    }

    const pq: number[] = []
    let left = n - 1, right = m + 1
    while (left + 1 < right) {
        pq.length = 0
        const mid = Math.floor((left + right) / 2)
        if (check(nums, changeIndices, firstT, pq, slow, mid)) {
            right = mid
        } else {
            left = mid
        }
    }
    return right > m ? -1 : right
}
function check(nums: number[], changeIndices: number[], firstT: number[], pq: number[], slow: number, mx: number) {
    let cnt = 0
    for (let t = mx - 1; t >= 0; t--) {
        const i = changeIndices[t] - 1
        const v = nums[i]
        if (v <= 1 || t !== firstT[i]) {
            cnt++
            continue
        }
        if (cnt === 0) {
            if (pq.length === 0 || v <= pq[0]) {
                cnt++
                continue
            }
            slow += pq.shift()! + 1
            cnt += 2
        }
        slow -= v + 1
        cnt--
        pq.push(v)
        pq.sort((a, b) => a - b)
    }
    return cnt >= slow
}