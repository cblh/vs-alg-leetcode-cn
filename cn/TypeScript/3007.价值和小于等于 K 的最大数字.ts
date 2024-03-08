// @algorithm @lc id=3240 lang=typescript 
// @title maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k
// @test(9,1)=6
// @test(7,2)=9
function findMaximumNumber(k: number, x: number) {
    let left = 0, right = 10e18
    let binaryThreshold = 1 << (x - 1)
    let doubleThreshold = 1 << x

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        let currentRange = binaryThreshold
        let valueSum = 0

        while (currentRange <= mid) {
            let completeCycles = Math.floor(mid / (2 * currentRange));
            let remainingNumbers = mid % (2 * currentRange);
            valueSum += completeCycles * currentRange + Math.max(0, remainingNumbers - currentRange + 1);
            currentRange *= doubleThreshold;
        }

        if (valueSum > k) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return right
}
