// @algorithm @lc id=303 lang=typescript 
// @title range-sum-query-immutable
interface TreeNodeSegmentTree {
    l: number
    r: number
    v: any
  }
  abstract class SegmentTree<T> {
    tree: TreeNodeSegmentTree[]
  
    constructor(
      protected arr: T[],
      protected getLeafValue: (v: any) => any,
      protected getNotLeafValue: (vl: any, vr: any) => any
    ) {
      const n = arr.length
      this.tree = Array(4 * n)
      this._build(0, 0, n - 1)
    }
    protected _build(u: number, l: number, r: number) {
      if (l === r) {
        this.tree[u] = {
          l,
          r,
          v: this.getLeafValue(this.arr[l]),
        }
        return
      }
      let m = Math.floor((l + r) / 2)
      this._build(2 * u + 1, l, m)
      this._build(2 * u + 2, m + 1, r)
      this.tree[u] = {
        l,
        r,
        v: this.getNotLeafValue(this.tree[2 * u + 1].v, this.tree[2 * u + 2].v),
      }
    }
    protected _update(u: number, pos: number, v: T) {
      const { l, r } = this.tree[u]
      if (pos < l || pos > r) {
        return
      }
      if (l === r) {
        if (l === pos) {
          this.tree[u].v = this.getLeafValue(v)
        }
        return
      }
      let m = Math.floor((l + r) / 2)
      if (pos > m) {
        this._update(2 * u + 2, pos, v)
      } else {
        this._update(2 * u + 1, pos, v)
      }
      this.tree[u].v = this.getNotLeafValue(
        this.tree[2 * u + 1].v,
        this.tree[2 * u + 2].v
      )
    }
    abstract query(start: number, end: number): any
    // abstract update(pos: number, value: T): void
  }
  
  /**
   * Sum segment tree.
   * Query the sum of given range and update the value in O(Logn) time.
   * @category segment tree
   * @example
   * ```js
   * const sumArr = new SumArr([2,3,1,7,9])
   * sumArr.query(0,2)
   * ```
   */
   class SumArr extends SegmentTree<number> {
    constructor(arr: number[]) {
      super(
        arr,
        x => x,
        (x, y) => x + y
      )
    }
    private _query(u: number, l: number, r: number): number {
      const { l: _l, r: _r, v } = this.tree[u]
      if (l <= _l && r >= _r) {
        return v
      }
      if (r < _l || l > _r) {
        return 0
      }
      let v1 = this._query(2 * u + 1, l, r)
      let v2 = this._query(2 * u + 2, l, r)
      return this.getNotLeafValue(v1, v2)
    }
    query(start = 0, end = this.arr.length - 1): number {
      return this._query(0, start, end)
    }
    update(pos: number, value: number) {
      this.arr[pos] = value
      this._update(0, pos, value)
    }
  }
  
  
  class NumArray {
      segmentTree: SumArr
      constructor(nums: number[]) {
          this.segmentTree = new SumArr(nums);
      }
  
      sumRange(left: number, right: number): number {
          return this.segmentTree.query(left, right)
      }
  }
  