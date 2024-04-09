// @algorithm @lc id=179 lang=typescript 
// @title largest-number
// @test([10,2])="210"
// @test([3,30,34,5,9])="9534330"
function largestNumber(nums: number[]): string {
    const vs: string[] = []
    for (const v of nums) {
        vs.push(v + '')
    }
    vs.sort((a, b) => (b + a) > (a + b) ? 1 : -1)
    return vs[0] === '0' ? '0' : vs.join('')
};