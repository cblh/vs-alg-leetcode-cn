// @algorithm @lc id=3299 lang=typescript 
// @title find-the-maximum-number-of-elements-in-subset
// @test([5,4,1,2,2])=3
// @test([1,3,2,4])=1
// @test([1,1])=1
// @test([1,1,1,1,1,1,1,1,1,1,2,4,8,16,32,64,128,256,512,1024])=9
function maximumLength(nums: number[]): number {
    const map = new Map<number, number>()
    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1)
    }
    let ans = 0
    map.forEach((value, key) => {
        if (key === 1) {
            ans = Math.max(ans, value % 2 === 0 ? value - 1 : value)
            return
        }
        let len = 0
        let num = key


        while (map.has(num)) {
            const count = map.get(num)!
            if (count >= 2) {
                len += 2
                num = Math.pow(num, 2)
            } else {
                len++
                break
            }
        }
        ans = Math.max(ans, len % 2 === 0 ? len - 1 : len)
    })
    return ans
};