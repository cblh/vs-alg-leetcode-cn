// @algorithm @lc id=2632 lang=typescript 
// @title apply-bitwise-operations-to-make-strings-equal
// @test("1010","0110")=true
// @test("11","00")=false
function makeStringsEqual(s: string, target: string): boolean {
    return s.includes('1') === target.includes('1')
};