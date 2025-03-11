// @algorithm @lc id=121 lang=typescript
// @title best-time-to-buy-and-sell-stock
// @test([7,1,5,3,6,4])=5
// @test([7,6,4,3,1])=0
function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let ans = 0;
  for (let p of prices) {
    ans = Math.max(ans, p - minPrice);
    if (p < minPrice) {
      minPrice = p;
    }
  }
  return ans;
}
