// @algorithm @lc id=3327 lang=typescript 
// @title minimum-moves-to-pick-k-ones
// @test([1,1,0,0,0,1,1,0,0,1],3,1)=3
// @test([0,0,0,0],2,3)=4
function minimumMoves(nums: number[], k: number, maxChanges: number): number {
    const n = nums.length
    const map = new Map<number, number[]>()
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (nums[j] === 1) {
                const distances = map.get(i) ?? []
                distances.push(Math.abs(i - j))
                map.set(i, distances)
            }
        }
    }
    let ans = Infinity
    map.forEach((value, key) => {
        value = value.concat(...new Array(maxChanges).fill(2))
        value.sort((a, b) => a - b)
        let count = 0
        let move = 0
        while (count < k) {
            move += value.shift()!
            count++
        }
        ans = Math.min(move, ans)
    })
    if (map.size === 0) {
        const distance = Array.from({length: maxChanges}, () => 2)
        let count = 0
        let move = 0
        while (count < k) {
            move += distance.shift()!
            count++
        }
        ans = Math.min(move, ans)
    }
    return ans
};