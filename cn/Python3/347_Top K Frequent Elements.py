# @algorithm @lc id=347 lang=python3 
# @title top-k-frequent-elements


from cn.Python3.mod.preImport import *
# @test([1,1,1,2,2,3],2)=[1,2]
# @test([1],1)=[1]
# @test([1,2,1,2,1,2,3,1,3,2],2)=[1,2]
import collections
from collections import Counter
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        cnt = Counter(nums)
        return [item for item, _ in cnt.most_common(k)]