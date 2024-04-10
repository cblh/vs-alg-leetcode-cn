// @algorithm @lc id=943 lang=typescript 
// @title sum-of-subarray-minimums
// @test([3,1,2,4])=17
// @test([11,81,94,43,3])=444
function sumSubarrayMins(arr: number[]): number {
    const mod = 1e9 + 7
    const n = arr.length
    const stack: number[] = []
    const left: number[] = Array.from({ length: n }, () => -1)
    const right: number[] = Array.from({ length: n }, () => n)
    for (let i = 0; i < n; i++) {
        const v = arr[i]
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= v) {
            stack.pop()
        }
        if (stack.length > 0) {
            left[i] = stack[stack.length - 1]
        }
        stack.push(i)
    }
    stack.length = 0
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop()
        }
        if (stack.length > 0) {
            right[i] = stack[stack.length - 1]
        }
        stack.push(i)
    }
    let ans = 0

    for (let i = 0; i < n; i++) {
        ans += (((i - left[i]) * (right[i] - i) % mod) * arr[i]) % mod
        ans %= mod
    }
    return ans
};