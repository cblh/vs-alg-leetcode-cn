// @algorithm @lc id=753 lang=typescript 
// @title open-the-lock
// @test(["0201","0101","0102","1212","2002"],"0202")=6
// @test(["8888"],"0009")=1
// @test(["8887","8889","8878","8898","8788","8988","7888","9888"],"8888")=-1
function openLock(deadends: string[], target: string): number {
    const s: Set<string> = new Set(deadends)
    if (s.has('0000')) {
        return -1
    }
    if (target === '0000') {
        return 0
    }
    const q: string[] = ['0000']
    s.add('0000')
    let ans = 0
    while (q.length > 0) {
        ++ans
        const size = q.length
        for (let i = 0; i < size; i++) {
            let p = q.shift()!
            for (const t of next(p)) {
                if (!s.has(t)) {
                    q.push(t)
                    s.add(t)
                }
                if (t === target) {
                    return ans
                }
            }
        }
    }
    return -1
}
function next(t: string): string[] {
    const res: string[] = []
    for (let i = 0; i < 4; i++) {
        let c = t[i]
        let t1 = t.substring(0, i) + (c === '0' ? '9' : String.fromCharCode(c.charCodeAt(0) - 1)) + t.substring(i + 1)
        res.push(t1)
        t1 = t.substring(0, i) + (c === '9' ? '1' : String.fromCharCode(c.charCodeAt(0) + 1)) + t.substring(i + 1)
        res.push(t1)
    }
    return res
}