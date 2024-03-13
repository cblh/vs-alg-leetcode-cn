// @algorithm @lc id=3309 lang=typescript 
// @title count-prefix-and-suffix-pairs-i
// @test(["a","aba","ababa","aa"])=4
// @test(["pa","papa","ma","mama"])=2
// @test(["abab","ab"])=0
class TrieNode {
    children: Map<number, TrieNode> = new Map<number, TrieNode>();
    cnt: number = 0;
}
function countPrefixSuffixPairs(words: string[]): number {
    let ans = 0
    const trie = new TrieNode()
    for (const s of words) {
        let node = trie
        const m = s.length
        for (let i =0; i < m; i++) {
            const p = s.charCodeAt(i) * 32 + s.charCodeAt(m - i - 1)
            if (!node.children.has(p)) {
                node.children.set(p, new TrieNode())
            }
            node = node.children.get(p)!
            ans += node.cnt
        }
        node.cnt++
    }
    return ans
}
