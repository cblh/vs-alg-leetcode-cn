# @algorithm @lc id=179 lang=python3 
# @title largest-number


from cn.Python3.mod.preImport import *
from functools import cmp_to_key
# @test([10,2])="210"
# @test([3,30,34,5,9])="9534330"
class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        arr = [str(num) for num in nums]
        arr.sort(key=cmp_to_key(lambda x, y: int(y + x) - int(x + y)))
        return '0' if arr[0] == '0' else ''.join(arr)