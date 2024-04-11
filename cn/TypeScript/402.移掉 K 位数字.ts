// @algorithm @lc id=402 lang=typescript 
// @title remove-k-digits
// @test("1432219",3)="1219"
// @test("10200",1)="200"
// @test("10",2)="0"
function removeKdigits(num: string, k: number): string {
    const stk: string[] = []
    for (const c of num) {
        while (k && stk.length > 0 && stk[stk.length - 1] > c) {
            stk.pop()
            k--
        }
        stk.push(c)
    }
    while (k--) {
        stk.pop()
    }
    let i = 0
    for (; i < stk.length && stk[i] == '0'; i++) {
    }
    const ans = stk.slice(i).join('')
    return ans === '' ? "0" : ans
};