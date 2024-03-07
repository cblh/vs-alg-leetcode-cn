// @algorithm @lc id=3245 lang=typescript 
// @title find-beautiful-indices-in-the-given-array-i
// @test("isawsquirrelnearmysquirrelhouseohmy","my","squirrel",15)=[16,33]
// @test("abcd","a","a",4)=[0]
function beautifulIndices(s: string, patternA: string, patternB: string, k: number): number[] {
    const beautifulIndicesA: number[] = search(s, patternA);
    const beautifulIndicesB: number[] = search(s, patternB);
    beautifulIndicesB.sort((x, y) => x - y)
    
    const result: number[] = []
    for (const index of beautifulIndicesA) {
        let left = lowerBound(beautifulIndicesB, index - k),
        right = lowerBound(beautifulIndicesB, index + k + patternB.length)
        left = (left >= 0) ? left : -(left + 1);
        right = (right >= 0) ? right : -(right + 1);
        for (let i = left; i < right; i++) {
            if (Math.abs(beautifulIndicesB[i] - index) <= k) {
                result.push(index)
                break
            }
        }
    }
    return result
    
}
function lowerBound(arr: number[], target: number): number {
    let left = 0,
    right = arr.length
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
}

function search(txt, pat)
{
    let M = pat.length;
    let N = txt.length;
 
    const result: number[] = []
    /* A loop to slide pat one by one */
    for (let i = 0; i <= N - M; i++) {
        let j;
 
        /* For current index i, check for pattern 
        match */
        for (j = 0; j < M; j++)
            if (txt[i + j] != pat[j])
                break;
 
        // if pat[0...M-1] = txt[i, i+1, ...i+M-1]
        if (j == M)
            result.push(i)
    }
    return result
}
