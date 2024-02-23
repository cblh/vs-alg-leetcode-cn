// @algorithm @lc id=2529 lang=typescript 
// @title range-product-queries-of-powers
// @test(15,[[0,1],[2,2],[0,3]])=[2,4,64]
// @test(2,[[0,0]])=[2]
const MOD = 1e9 + 7;
function productQueries(n: number, queries: [number, number][]): number[] {
    const powers: number[] = []
    while (n > 0) {
        const x = n & -n
        powers.push(x)
        n -= x
    }
    let ans: number[] = []
    for (const query of queries) {
        const [l, r] = query
        let x = 1n
        for (let i = l; i <= r; i++) {
            x = (x * BigInt(powers[i])) % BigInt(MOD)
        }
        ans.push(Number(x))
    }
    return ans;
}  