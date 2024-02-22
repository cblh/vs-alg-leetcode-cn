// @algorithm @lc id=739 lang=typescript 
// @title daily-temperatures
// @test([73,74,75,71,69,72,76,73])=[1,1,4,2,1,1,0,0]
// @test([30,40,50,60])=[1,1,1,0]
// @test([30,60,90])=[1,1,0]
function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = []
    const n = temperatures.length
    const res: number[] = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        const temperature = temperatures[i]
        while (stack.length !== 0 && temperature > temperatures[stack[stack.length - 1]]) {
            res[stack[stack.length - 1]] = i - stack[stack.length - 1]
            stack.pop()
        }
        stack.push(i)
    }
    return res
};