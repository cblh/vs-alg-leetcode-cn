// @algorithm @lc id=1839 lang=typescript
// @title decode-xored-array
// @test([1,2,3],1)=[1,0,2,1]
// @test([6,2,7,3],4)=[4,2,0,7,4]
function decode(encoded: number[], first: number): number[] {
  // 相同数值异或，结果为 000
  // 任意数值与 000 进行异或，结果为数值本身
  // 异或本身满足交换律
  const n = encoded.length;
  const ans = new Array(n + 1);
  ans[0] = first;
  for (let i = 0; i < n; ++i) {
    ans[i + 1] = ans[i] ^ encoded[i];
  }
  return ans;
}
