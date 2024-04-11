// @algorithm @lc id=1350 lang=typescript 
// @title remove-sub-folders-from-the-filesystem
// @test(["/a","/a/b","/c/d","/c/d/e","/c/f"])=["/a","/c/d","/c/f"]
// @test(["/a","/a/b/c","/a/b/d"])=["/a"]
// @test(["/a/b/c","/a/b/ca","/a/b/d"])=["/a/b/c","/a/b/ca","/a/b/d"]
function removeSubfolders(folder: string[]): string[] {
    folder.sort()
    const ans: string[] = []
    ans.push(folder[0])
    for (let i = 1; i < folder.length; i++) {
        const m = ans[ans.length - 1].length
        const n = folder[i].length
        if (m >= n || !(ans[ans.length - 1] === folder[i].slice(0, m) && folder[i].charAt(m) === '/')) {
            ans.push(folder[i])
        }
    }
    return ans
};