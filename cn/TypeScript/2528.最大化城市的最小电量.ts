// @algorithm @lc id=2618 lang=typescript 
// @title maximize-the-minimum-powered-city
// @test([1,2,4,5,0],1,2)=5
// @test([4,4,4,4],0,3)=4
// @test([78,55,77,83,29,23,56,80,97,77,42], 3, 89)=339
function maxPower(stations: number[], r: number, k: number): number {
    function check(x: bigint, k: bigint): boolean {
        d.fill(0n);
        let t = 0n;
        for (let i = 0; i < n; ++i) {
            t += d[i];
            const dist = x - (s[i] + t);
            if (dist > 0) {
                if (k < dist) {
                    return false;
                }
                k -= dist;
                const j = Math.min(i + r, n - 1);
                const left = Math.max(0, j - r);
                const right = Math.min(j + r, n - 1);
                d[left] += dist;
                d[right + 1] -= dist;
                t += dist;
            }
        }
        return true;
    }
    const n = stations.length;
    const d: bigint[] = new Array(n + 1).fill(0n);
    const s: bigint[] = new Array(n + 1).fill(0n);

    for (let i = 0; i < n; ++i) {
        const left = Math.max(0, i - r);
        const right = Math.min(i + r, n - 1);
        d[left] += BigInt(stations[i]);
        d[right + 1] -= BigInt(stations[i]);
    }

    s[0] = d[0];
    for (let i = 1; i < n + 1; ++i) {
        s[i] = s[i - 1] + d[i];
    }

    let left = 0n, right = 1n << 40n;
    while (left < right) {
        const mid = (left + right + 1n) >> 1n;
        if (check(mid, BigInt(k))) {
            left = mid;
        } else {
            right = mid - 1n;
        }
    }
    return Number(left);
};
