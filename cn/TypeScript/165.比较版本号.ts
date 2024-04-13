// @algorithm @lc id=165 lang=typescript 
// @title compare-version-numbers
// @test("1.01","1.001")=0
// @test("1.0","1.0.0")=0
// @test("0.1","1.1")=-1
// @test("1.0.1", "1")=1
function compareVersion(version1: string, version2: string): number {
    const arr1 = version1.split('.'),
        arr2 = version2.split('.')
    const n = Math.max(arr1.length, arr2.length)
    let ans = 0
    for (let i = 0; i < n; i++) {
        const num1 = parseInt(arr1[i] ?? '0')
        const num2 = parseInt(arr2[i] ?? '0')
        if (num1 === num2) {
            ans = 0
        } else if (num1 < num2) {
            ans = -1
            break
        } else {
            ans = 1
            break
        }
    }
    return ans
};