# @algorithm @lc id=8 lang=python3 
# @title string-to-integer-atoi


from cn.Python3.mod.preImport import *
# @test("42")=42
# @test(" -042")=-42
# @test("1337c0d3")=1337
# @test("0-1")=0
# @test("words and 987")=0
class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.lstrip()
        if not s:
            return 0
        sign = 1
        if s[0] == '-':
            sign = -1
            s = s[1:]
        elif s[0] == '+':
            s = s[1:]
        num = 0
        for char in s:
            if not char.isdigit():
                break
            num = num * 10 + int(char)
            if sign == 1 and num > 2**31 - 1:
                return 2**31 -1
            elif sign == -1 and num > 2**31:
                return -2**31
        return sign * num
