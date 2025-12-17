# @algorithm @lc id=217 lang=python3 
# @title contains-duplicate


from cn.Python3.mod.preImport import *
# @test([1,2,3,1])=true
# @test([1,2,3,4])=false
# @test([1,1,1,3,3,4,3,2,4,2])=true
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False