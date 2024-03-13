// @algorithm @lc id=3329 lang=typescript 
// @title find-the-length-of-the-longest-common-prefix
// @test([1,10,100],[1000])=3
// @test([1,2,3],[4,4,4])=0
// @test([1], [17])=1
function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const s: { [key: number]: boolean } = {};
    let ans = 0;

    for (const x of arr1) {
        let temp = x;
        while (temp > 0) {
            s[temp] = true;
            temp = Math.floor(temp / 10);
        }
    }

    for (const x of arr2) {
        let temp = x;
        while (temp > 0) {
            if (s[temp]) {
                ans = Math.max(ans, Math.floor(Math.log10(temp)) + 1);
                break;
            }
            temp = Math.floor(temp / 10);
        }
    }

    return ans;
}