# @algorithm @lc id=57 lang=python3 
# @title insert-interval


from cn.Python3.mod.preImport import *
# @test([[1,3],[6,9]],[2,5])=[[1,5],[6,9]]
# @test([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8])=[[1,2],[3,10],[12,16]]
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        ans = []
        left, right = newInterval
        inserted = False
        for s, e in intervals:
            if right < s:
                if not inserted:
                    ans.append([left, right])
                    inserted = True
                ans.append([s, e])
            elif e < left:
                ans.append([s, e])
            else:
                left = min(left, s)
                right = max(right, e)
        if not inserted:
            ans.append([left, right])
        return ans
