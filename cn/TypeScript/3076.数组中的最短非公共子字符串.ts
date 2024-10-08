// @algorithm @lc id=3356 lang=typescript 
// @title shortest-uncommon-substring-in-an-array
// @test(["cab","ad","bad","c"])=["ab","","ba",""]
// @test(["abc","bcd","abcd"])=["","","abcd"]
function shortestSubstrings(arr: string[]): string[] {
    const n: number = arr.length;
    const ans: string[] = Array(n).fill('');
    for (let i = 0; i < n; i++) {
        const m = arr[i].length
        for (let j = 1; j <= m && ans[i] === ''; ++j) {
            for (let l = 0; l <= m - j; ++l) {
                const sub = arr[i].slice(l, j + l)
                let ok = true
                if (ans[i] === '' || sub.localeCompare(ans[i]) < 0) {
                    for (let k = 0; k < n && ok; k++) {
                        if (k !== i && arr[k].includes(sub)) {
                            ok = false
                        }
                    }
                    if (ok) {
                        ans[i] = sub
                    }
                }
            }
        }
    }
    return ans;
}
function shortestSubstrings2(arr: string[]): string[] {
    const n: number = arr.length;
    const ans: string[] = Array(n).fill('');
    for (let i = 0; i < n; ++i) {
        const m: number = arr[i].length;
        for (let j = 1; j <= m && ans[i] === ''; ++j) {
            for (let l = 0; l <= m - j; ++l) {
                const sub: string = arr[i].slice(l, l + j);
                if (ans[i] === '' || sub.localeCompare(ans[i]) < 0) {
                    let ok: boolean = true;
                    for (let k = 0; k < n && ok; ++k) {
                        if (k !== i && arr[k].includes(sub)) {
                            ok = false;
                        }
                    }
                    if (ok) {
                        ans[i] = sub;
                    }
                }
            }
        }
    }
    return ans;
}