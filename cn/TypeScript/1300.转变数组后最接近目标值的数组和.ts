// @algorithm @lc id=1232 lang=typescript 
// @title sum-of-mutated-array-closest-to-target
// @test([4,9,3],10)=3
// @test([2,3,5],10)=5
// @test([60864,25176,27249,21296,20204],56803)=11361
// @test([1547,83230,57084,93444,70879],71237)=17422
function findBestValue(arr: number[], target: number): number {
    arr.sort((x, y) => x - y)
    const n = arr.length
    const prefix = [0]
    for (let i = 1; i <= n; i++) {
        prefix[i] = prefix[i - 1] + arr[i - 1]
    }
    let left = 0, right = arr[n - 1], ans = -1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        let index = arr.findIndex(item => item > mid)
        if (index < 0) {
            index = -index - 1;
        }
        const cur = prefix[index] + (n - index) * mid;
        console.log(mid, cur,index )
        if (cur <= target) {
            ans = mid;
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    const chooseSmall = check(arr, ans);
    const chooseBig = check(arr, ans + 1);
    return Math.abs(chooseSmall - target) <= Math.abs(chooseBig - target) ? ans : ans + 1;
}
function check(arr: number[], x: number) {
    let ret = 0;
    for (const num of arr) {
        ret += Math.min(num, x);
    }
    return ret;
}
function findLastIndex<T>(array: Array<T>, predicate: (value: T, index: number, obj: T[]) => boolean): number {
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array))
            return l;
    }
    return -1;
}
