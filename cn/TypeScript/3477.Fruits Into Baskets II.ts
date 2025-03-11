// @algorithm @lc id=3790 lang=typescript
// @title fruits-into-baskets-ii
// @test([4,2,5],[3,5,4])=1
// @test([3,6,1],[6,4,7])=0
function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  const valueSegTree = new SegmentTree(baskets);
  const n = baskets.length;
  let ans = 0;
  for (let x of fruits) {
    if (valueSegTree.findFirstAndUpdate(1, 0, n - 1, x) < 0) {
      ans += 1;
    }
  }
  return ans;
}
function createZeroArray(n) {
  // 计算 (n - 1) 的二进制表示所需的位数
  const bitLength = (n - 1).toString(2).length;
  // 计算 2 左移 bitLength 位的结果
  const length = 2 << bitLength;
  // 创建一个长度为 length 且元素初始化为 0 的数组
  const result = new Array(length).fill(0);
  return result;
}
class SegmentTree {
  max: number[];
  constructor(arr: number[]) {
    const n = arr.length;
    this.max = createZeroArray(n);
    this.build(arr, 1, 0, n - 1);
  }

  maintain(o: number) {
    this.max[o] = Math.max(this.max[o * 2], this.max[o * 2 + 1]);
  }

  build(a: number[], o: number, l: number, r: number) {
    if (l === r) {
      this.max[o] = a[l];
      return;
    }
    const m = Math.floor((l + r) / 2);
    this.build(a, o * 2, l, m);
    this.build(a, o * 2 + 1, m + 1, r);
    this.maintain(o);
  }

  findFirstAndUpdate(o: number, l: number, r: number, x: number): number {
    if (this.max[o] < x) {
      return -1;
    }
    if (l === r) {
      this.max[o] = -1;
      return l;
    }
    const m = Math.floor((l + r) / 2);
    let i = this.findFirstAndUpdate(o * 2, l, m, x);
    if (i < 0) {
      i = this.findFirstAndUpdate(o * 2 + 1, m + 1, r, x);
    }
    this.maintain(o);
    return i;
  }
}
