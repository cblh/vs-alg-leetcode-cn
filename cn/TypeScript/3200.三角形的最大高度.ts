// @algorithm @lc id=3469 lang=typescript 
// @title maximum-height-of-a-triangle
// @test(2,4)=3
// @test(2,1)=2
// @test(1,1)=1
// @test(10,1)=2
function maxHeightOfTriangle(red: number, blue: number): number {
    const max = Math.max(red, blue);
    const min = Math.min(red, blue);
    let left = 0, right = 1;
    
    // 先找到一个上界
    while (requiredBalls(right) <= red + blue) {
        right *= 2;
    }

    // 二分查找最大高度
    while (left < right) {
        // 我们在二分查找过程中使用Math.floor((left + right + 1) / 2)来计算middle，这样可以避免在left和right相差1的情况下无限循环。每次迭代时，通过比较min和max是否足够满足当前高度的球数需求来调整left和right
        const middle = Math.floor((left + right + 1) / 2);
        const [ji, ou] = matchHeight(middle);
        if (min >= Math.min(ji, ou) && max >= Math.max(ji, ou)) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }
    return left;
}

// 计算高度为 num 所需的奇数行和偶数行球数
function matchHeight(num: number): [number, number] {
    let sumji = 0, sumou = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 1) {
            sumji += i;
        } else {
            sumou += i;
        }
    }
    return [sumji, sumou];
}

// 计算高度为 h 的三角形需要的总球数
function requiredBalls(h: number): number {
    return (h * (h + 1)) / 2;
}