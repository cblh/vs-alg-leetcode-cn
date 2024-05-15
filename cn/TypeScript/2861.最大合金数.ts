// @algorithm @lc id=3095 lang=typescript 
// @title maximum-number-of-alloys
// @test(3,2,15,[[1,1,1],[1,1,10]],[0,0,0],[1,2,3])=2
// @test(3,2,15,[[1,1,1],[1,1,10]],[0,0,100],[1,2,3])=5
// @test(2,3,10,[[2,1],[1,2],[1,1]],[1,1],[5,5])=2
function maxNumberOfAlloys(n: number, k: number, budget: number, composition: number[][], stock: number[], cost: number[]): number {
    function calcCost(num: number): boolean {
        return composition.some((arr) => {
            return arr.reduce((acc, item, i) => {
                return acc + item * cost[i]
            }, 0) * num - stock.reduce((acc, item, i) => {
                return acc + Math.min(item, arr[i] * num) * cost[i]
            }, 0) <= budget
        })
    }

    let left = 0,
        right = 10e8
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2)
        if (calcCost(mid)) {
            left = mid
        } else {
            right = mid - 1
        }
    }
    return left
};