// @algorithm @lc id=402 lang=typescript 
// @title remove-k-digits
// @test("1432219",3)="1219"
// @test("10200",1)="200"
// @test("10",2)="0"
function removeKdigits(num: string, k: number): string {
    const nums = [...num]
    while (k > 0) {
        let idx = 0
        while (idx < nums.length - 1 && nums[idx + 1] >= nums[idx]) {
            idx++
        }
        nums.splice(idx, 1)
        k--
    }
    return nums.join('').replace(/^0*/g, '') || '0'
};