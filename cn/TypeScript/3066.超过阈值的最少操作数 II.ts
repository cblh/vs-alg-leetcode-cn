// @algorithm @lc id=3332 lang=typescript 
// @title minimum-operations-to-exceed-threshold-value-ii
// @test([2,11,10,1,3],10)=2
// @test([1,1,2,4,9],20)=4
function minOperations(nums: number[], k: number): number {
    const pq = new MinPriorityQueue();
    for (const num of nums) {
        pq.enqueue(num)
    }
    let ans = 0
    while (pq.size() > 1 && pq.front().element < k) {
        const [x, y] = [pq.dequeue().element, pq.dequeue().element]
        pq.enqueue(Math.min(x, y) * 2 + Math.max(x, y))
        ans++
    }
    return ans
}