// @algorithm @lc id=1403 lang=typescript 
// @title palindrome-partitioning-iii
// @test("abc",2)=1
// @test("aabbc",3)=0
// @test("leetcode",8)=0

function palindromePartition(s: string, K: number): number {
    const n = s.length,
    dp = new Array(n + 1).fill(0).map(() => new Array(K + 1).fill(0))
    s = ' ' + s
    for (let i = 1; i <= n; i++) {
        dp[i][1] = cal(s, 1, i)
    }
    for (let i = 1; i <= n; i++) {
        for (let k = 2; k <= Math.min(K, i); k++) {
            dp[i][k] = Infinity
            for (let j = i; j >= k; j--) {
                dp[i][k] = Math.min(dp[i][k], dp[j - 1][k - 1] + cal(s, j, i))
            }
        }
    }

    return dp[n][K]
};

function cal( s: string,  j: number,  i: number) {
    let cnt = 0;
    for (; j < i; j++, i--) {
        if (s.charAt(j) != s.charAt(i)) cnt++;
    }
    return cnt;
}