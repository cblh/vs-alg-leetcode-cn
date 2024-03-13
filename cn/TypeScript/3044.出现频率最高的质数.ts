// @algorithm @lc id=3314 lang=typescript 
// @title most-frequent-prime
// @test([[1,1],[9,9],[1,1]])=19
// @test([[7]])=-1
// @test([[9,7,8],[4,6,5],[2,8,6]])=97
function mostFrequentPrime(mat: number[][]): number {
    const n = mat.length,
    m = mat[0].length
    const cnt: Map<number, number> = new Map()
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let a = -1; a <= 1; a++) {
                for (let b = -1; b <= 1; b++) {
                    if (a === 0 && b === 0) {
                        continue
                    }
                    let [x, y, v] = [i + a, j + b, mat[i][j]]
                    while (x >= 0 && x < n && y >= 0 && y < m) {
                        v = v * 10 + mat[x][y]
                        if (isPrime(v)) {
                            cnt.set(v, (cnt.get(v) ?? 0) + 1)
                        }
                        x += a
                        y += b
                    }
                }
            }
        }
    }

    let [mx, ans] = [0, -1]
    cnt.forEach((x, v) => {
        if (mx < x || ( mx === x && v > ans)) {
            ans = v
            mx = x
        }
    })
    return ans
}
const isPrime = (n: number): boolean => {
    // Corner case
    if (n <= 1)
    return false;

    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
};
