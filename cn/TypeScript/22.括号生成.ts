// @algorithm @lc id=22 lang=typescript 
// @title generate-parentheses
// @test(3)=["((()))","(()())","(())()","()(())","()()()"]
// @test(1)=["()"]
function generateParenthesis(n: number): string[] {
    const ans: string[] = []
    function dfs(l: number, r: number, t: string) {
        if (l > n || r > n || l < r) {
            return
        }
        if (l === n && r === n) {
            return ans.push(t)
        }
        dfs(l + 1, r, t + '(')
        dfs(l, r + 1, t + ')')
    }
    dfs(0, 0, '')
    return ans
};