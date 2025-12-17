# @algorithm @lc id=829 lang=python3 
# @title subdomain-visit-count


from cn.Python3.mod.preImport import *
from collections import Counter
# @test(["9001 discuss.leetcode.com"])=["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
# @test(["900 google.mail.com","50 yahoo.com","1 intel.mail.com","5 wiki.org"])=["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        cnt = Counter()
        for s in cpdomains:
            v = int(s[: s.index(' ')])
            for i, c in enumerate(s):
                if c in ' .':
                    cnt[s[i + 1 :]] += v
        return [f'{v} {s}' for s, v in cnt.items()]