# @algorithm @lc id=49 lang=python3 
# @title group-anagrams


from collections import defaultdict
# @test(["eat","tea","tan","ate","nat","bat"])=[["bat"],["nat","tan"],["ate","eat","tea"]]
# @test([""])=[[""]]
# @test(["a"])=[["a"]]
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        d = defaultdict(list)
        for s in strs:
            key = ''.join(sorted(s))
            d[key].append(s)
        return list(d.values())