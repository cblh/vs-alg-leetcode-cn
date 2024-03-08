// @algorithm @lc id=3303 lang=typescript 
// @title find-beautiful-indices-in-the-given-array-ii
// @test("isawsquirrelnearmysquirrelhouseohmy","my","squirrel",15)=[16,33]
// @test("abcd","a","a",4)=[0]
function beautifulIndices(s: string, patternA: string, patternB: string, k: number): number[] {
    const beautifulIndicesA: number[] = kmpSearch(s, patternA);
    const beautifulIndicesB: number[] = kmpSearch(s, patternB);
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


function kmpSearch(text: string, pattern: string): number[] {
    const indices: number[] = [];
    const pi: number[] = computePrefixFunction(pattern);

    let q = 0;
    for (let i = 0; i < text.length; i++) {
        while (q > 0 && pattern[q] !== text[i]) {
            q = pi[q - 1];
        }
        if (pattern[q] === text[i]) {
            q++;
        }
        if (q === pattern.length) {
            indices.push(i - q + 1);
            q = pi[q - 1];
        }
    }

    return indices;
}

function computePrefixFunction(pattern: string): number[] {
    const m: number = pattern.length;
    const pi: number[] = new Array(m).fill(0);
    let k = 0;
    for (let q = 1; q < m; q++) {
        while (k > 0 && pattern[k] !== pattern[q]) {
            k = pi[k - 1];
        }
        if (pattern[k] === pattern[q]) {
            k++;
        }
        pi[q] = k;
    }
    return pi;
}
