# @algorithm @lc id=56 lang=python3 
# @title merge-intervals


from cn.Python3.mod.preImport import *
# @test([[1,3],[2,6],[8,10],[15,18]])=[[1,6],[8,10],[15,18]]
# @test([[1,4],[4,5]])=[[1,5]]
# @test([[4,7],[1,4]])=[[1,7]]
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])
        merged = []
        st, ed = intervals[0]
        for [s, e] in intervals[1:]:
            if s <= ed:
                ed = max(ed, e)
            else:
                merged.append([st, ed])
                st, ed = s, e
        merged.append([st, ed])
        return merged