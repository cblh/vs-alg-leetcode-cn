// @algorithm @lc id=2850 lang=typescript 
// @title construct-the-longest-new-string
// AA BB AB AA -> BB BB -> AA/AB AB -> AA
// @test(2,5,1)=12
// @test(3,2,2)=14
function longestString(x: number, y: number, z: number): number {
    if (x > y) {
        return (2 * y + 1 + z) * 2
    }
    if (x < y) {
        return (2 * x + 1 + z) * 2
    }
    return (2 * x + z) * 2
};