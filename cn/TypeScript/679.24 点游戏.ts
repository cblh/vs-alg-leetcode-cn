// @algorithm @lc id=679 lang=typescript 
// @title 24-game
// @test([4,1,8,7])=true
// @test([1,2,1,2])=false
// @test([1,7,4,5])=true
function judgePoint24(cards: number[]): boolean {
    const ops = ['-', '+', '/', '*']
    function dfs(nums: number[]): boolean {
        const n = nums.length
        if (n === 1) {
            return Math.abs(nums[0] - 24) < 1e-6
        }
        let res = false
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    const nxt = nums.filter((num, idx) => idx !== i && idx !== j)
                    for (const op of ops){
                        switch (op) {
                            case '/':
                                if (nums[j] === 0) {
                                    continue;
                                }
                                res ||= dfs([...nxt, nums[i] / nums[j]])
                                break;
                            case '*':
                                res ||= dfs([...nxt, nums[i] * nums[j]])
                                break;
                            case '-':
                                res ||= dfs([...nxt, nums[i] - nums[j]])
                                break;
                            case '+':
                                res ||= dfs([...nxt, nums[i] + nums[j]])
                                break;
                        }
                    }
                }
            }
        }
        return res
    }
    return dfs(cards)
};