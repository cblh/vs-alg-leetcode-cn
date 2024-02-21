// @algorithm @lc id=2512 lang=typescript 
// @title longest-uploaded-prefix
class LUPrefix {
    n: number
    set: Set<number>
    longestCache: number
    constructor(n: number) {
        this.n = n
        this.set = new Set()
        this.longestCache = 1
    }
    upload(video: number) {
        this.set.add(video)
    }
    longest() {
        for (let i = this.longestCache; i <= this.n; i++) {
            if (this.set.has(i)) {
                this.longestCache += 1
            } else {
                break
            }
        }
        return this.longestCache - 1

    }
}