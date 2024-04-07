function getSmallestString(s: string, k: number): string {
    if (k === 0) {
        return s
    }
    let distance = 0 
    let ans = ''
    const charCodeA = 'a'.charCodeAt(0)
    for (const char of s) {
        const charCode = char.charCodeAt(0)
        const [d1, d2] = calDistance(charCodeA, charCode)
        const modifyDis = Math.min(d1, d2)
        if (distance >= k) {
            ans += char
        }else if (modifyDis + distance > k) {
            ans += String.fromCharCode(charCode - (k - distance))
            distance = k
        } else {
            distance += modifyDis
            ans += 'a'
        }
    }
    return ans
};

function calDistance(n1, n2) {
    const d1 = n2 - n1
    const d2 = 'z'.charCodeAt(0)  - n2 + 1
    return [d1, d2]
}