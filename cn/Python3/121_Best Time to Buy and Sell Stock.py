# @algorithm @lc id=121 lang=python3 
# @title best-time-to-buy-and-sell-stock


from cn.Python3.mod.preImport import *
# @test([7,1,5,3,6,4])=5
# @test([7,6,4,3,1])=0
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans, mi = 0, float('inf')
        for i, price in enumerate(prices):
            ans = max(ans, price - mi)
            mi = min(mi, price)
        return ans