// @algorithm @lc id=496 lang=typescript 
// @title next-greater-element-i
// @test([4,1,2],[1,3,4,2])=[-1,3,-1]
// @test([2,4],[1,2,3,4])=[3,-1]
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const stack: number[] = [],
    numMap = new Map()
    for (const num of nums2) {
        while (stack.length !== 0 && num > stack[stack.length - 1]) {
            numMap.set(stack[stack.length - 1], num)
            stack.pop()
        }
        stack.push(num)
    }
    const res: number[] = []
    for (const num of nums1) {
        res.push(numMap.get(num) ?? -1)
    }
    return res
};