// @algorithm @lc id=3272 lang=typescript 
// @title find-the-grid-of-region-average
// @test([[5,6,7,10],[8,9,10,10],[11,12,13,10]],3)=[[9,9,9,9],[9,9,9,9],[9,9,9,9]]
// @test([[10,20,30],[15,25,35],[20,30,40],[25,35,45]],12)=[[25,25,25],[27,27,27],[27,27,27],[30,30,30]]
// @test([[5,6,7],[8,9,10],[11,12,13]],1)=[[5,6,7],[8,9,10],[11,12,13]]
function resultGrid(image: number[][], threshold: number): number[][] {
    const n = image.length,
        m = image[0].length
    const ans: number[][] = Array.from({ length: n }).fill(0).map(() => Array.from({ length: m }, () => 0)),
        ct: number[][] = Array.from({ length: n }).fill(0).map(() => Array.from({ length: m }, () => 0))
    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < m - 2; j++) {
            let region = true
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 2; l++) {
                    region &&= Math.abs(image[i + k][j + l] - image[i + k][j + l + 1]) <= threshold
                }
            }
            for (let k = 0; k < 2; k++) {
                for (let l = 0; l < 3; l++) {
                    region &&= Math.abs(image[i + k][j + l] - image[i + k + 1][j + l]) <= threshold
                }
            }
            if (region) {
                let tot = 0
                for (let k = 0; k < 3; k++) {
                    for (let l = 0; l < 3; l++) {
                        tot += image[i + k][j + l]
                    }
                }
                const add = Math.floor(tot / 9)
                for (let k = 0; k < 3; k++) {
                    for (let l = 0; l < 3; l++) {
                        ct[i + k][j + l]++
                        ans[i + k][j + l] += add
                    }
                }
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (ct[i][j] === 0) {
                ans[i][j] = image[i][j]
            } else {
                ans[i][j] = Math.floor(ans[i][j] / ct[i][j])
            }
        }
    }
    return ans
}