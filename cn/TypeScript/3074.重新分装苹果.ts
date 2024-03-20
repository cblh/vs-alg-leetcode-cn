// @algorithm @lc id=3334 lang=typescript 
// @title apple-redistribution-into-boxes
// @test([1,3,2],[4,3,1,5,2])=2
// @test([5,5,5],[2,4,2,7])=4
function minimumBoxes(apple: number[], capacity: number[]): number {
    let sum = apple.reduce((acc, num) => acc + num)
    capacity.sort((a, b) => b - a)
    let ans = 0
    for (const cap of capacity) {
        sum -= cap
        ans++
        if (sum <= 0) {
            break
        }
    }
    return ans
};