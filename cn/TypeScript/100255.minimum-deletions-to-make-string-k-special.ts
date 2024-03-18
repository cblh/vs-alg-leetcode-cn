// @test("aabcaba",0)=3
// @test("dabdcbdcdcd",2)=2
// @test("aaabaaa",2)=1
function minimumTimeToInitialState(word: string, k: number): number {
    let countMap = new Map()
    for (const char of word) {
        countMap.set(char, (countMap.get(char) ?? 0) + 1)
    }
    const counts: number[] = []
    countMap.forEach((count, key) => {
        counts.push(count)
    })
    counts.sort((a, b) => a - b)
    if (counts[counts.length - 1] - counts[0] < k) {
        return 0
    }
    let ans = Infinity
    for (let i = counts[0]; i <= counts[counts.length - 1]; i++) {
        let toDel = 0
        // range i, i + k
        for (const count of counts) {
            if (count > i + k) {
                toDel += count - i - k
            }
            if (count < i) {
                toDel += count
            }
        }
        ans = Math.min(ans, toDel)
    }
    return ans
};