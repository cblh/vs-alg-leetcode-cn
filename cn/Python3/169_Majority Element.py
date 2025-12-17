# @algorithm @lc id=169 lang=python3 
# @title majority-element


from cn.Python3.mod.preImport import *
# @test([3,2,3])=3
# @test([2,2,1,1,1,2,2])=2
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        cnt = m = 0
        for x in nums:
            if cnt == 0:
                m, cnt = x, 1
            else:
                cnt += 1 if m == x else -1
        return m