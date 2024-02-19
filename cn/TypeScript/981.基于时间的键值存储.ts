// @algorithm @lc id=1023 lang=typescript 
// @title time-based-key-value-store
class TimeMap {
    map: Map<string, [string, number][]>
    constructor() {
        this.map = new Map<string, [string, number][]>();
    }

    set(key: string, value: string, timestamp: number): void {
        if (this.map.get(key)) {
            this.map.get(key)?.push([value, timestamp])
        } else {
            this.map.set(key, [[value, timestamp]])
        }
    }

    get(key: string, timestamp: number): string {
        const arr = this.map.get(key)
        if (arr && arr?.length >= 1) {
            let left = 0,
            right = arr.length - 1
            while (left <= right) {
                const middle = Math.floor((left + right) / 2)
                const pivot = arr[middle][1]
                if (pivot === timestamp) {
                    return arr[middle][0]
                } else if (pivot > timestamp) {
                    right = middle - 1
                } else {
                    left = middle + 1
                }
            }
            if (right >= 0) {
                return arr[right][0]
            }
        }
        return ''
    }
}