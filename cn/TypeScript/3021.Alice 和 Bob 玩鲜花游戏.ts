// @algorithm @lc id=3279 lang=typescript 
// @title alice-and-bob-playing-flower-game
// @test(3,2)=3
// @test(1,1)=0
function flowerGame(n: number, m: number): number {
    let ans = 0
    ans = calcDouble(n) * calcSingle(m) + calcSingle(n) * calcDouble(m)
    return ans
};
function calcDouble(n: number) {
    return Math.floor(n / 2)
}
function calcSingle(n: number) {
    return n % 2 === 0 ? Math.floor(n / 2) : Math.floor(n / 2) + 1
}