# @algorithm @lc id=451 lang=python3 
# @title sort-characters-by-frequency


from cn.Python3.mod.preImport import *
from collections import Counter
# @test("tree")="eert"
# @test("cccaaa")="aaaccc"
# @test("Aabb")="bbAa"
class Solution:
    def frequencySort(self, s: str) -> str:
        cnt = Counter(s)
        return ''.join(c * freq for c, freq in cnt.most_common())