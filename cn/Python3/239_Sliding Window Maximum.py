# @algorithm @lc id=239 lang=python3 
# @title sliding-window-maximum


from cn.Python3.mod.preImport import *
# @test([1,3,-1,-3,5,3,6,7],3)=[3,3,5,5,6,7]
# @test([1],1)=[1]
# @test([1,3,-1,-3,5,3,6,7], 3)=[3,3,5,5,6,7]
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        d = deque()
        ans = []
        for i, x in enumerate(nums):
            if d and i - d[0] >= k:
                d.popleft()
            while d and nums[d[-1]] <= x:
                d.pop()
            d.append(i)
            if i >= k - 1:
                ans.append(nums[d[0]])
        return ans