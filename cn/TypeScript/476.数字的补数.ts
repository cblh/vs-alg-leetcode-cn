// @algorithm @lc id=476 lang=typescript 
// @title number-complement
// @test(5)=2
// @test(1)=0
function findComplement(num: number): number {
    return num ^ (2 ** num.toString(2).length - 1)
};