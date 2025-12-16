# @algorithm @lc id=23 lang=python3 
# @title merge-k-sorted-lists


from cn.Python3.mod.preImport import *
# @test([[1,4,5],[1,3,4],[2,6]])=[1,1,2,3,4,4,5,6]
# @test([])=[]
# @test([[]])=[]
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        setattr(ListNode, "__lt__", lambda self, other: self.val < other.val)
        pq = [head for head in lists if head]
        heapify(pq)
        dummy = cur = ListNode()
        while pq:
            node = heappop(pq)
            if node.next:
                heappush(pq, node.next)
            cur.next = node
            cur = cur.next
        return dummy.next