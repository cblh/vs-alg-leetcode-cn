// @algorithm @lc id=3297 lang=typescript 
// @title minimum-time-to-revert-word-to-initial-state-i
// @test("abacaba",3)=2
// @test("abacaba",4)=1
// @test("abcbabcd",2)=4
function minimumTimeToInitialState(word: string, k: number): number {
    const n = word.length;
    for (let i = k; i < n; i += k) {
        if (word.slice(i) === word.slice(0, -i)) {
            return Math.floor(i / k);
        }
    }
    return Math.floor((n + k - 1) / k);
}