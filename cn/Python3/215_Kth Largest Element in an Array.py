# @algorithm @lc id=215 lang=python3 
# @title kth-largest-element-in-an-array


from cn.Python3.mod.preImport import *
import heapq
# @test([3,2,1,5,6,4],2)=5
# @test([3,2,3,1,2,4,5,5,6],4)=4
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        return heapq.nlargest(k, nums)[-1]