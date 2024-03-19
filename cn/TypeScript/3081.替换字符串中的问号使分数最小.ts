// @algorithm @lc id=3354 lang=typescript 
// @title replace-question-marks-in-string-to-minimize-its-value
// @test("???")="abc"
// @test("a?a?")="abac"
// @test("fd????c?mkhfk?to?l??fgzkkup???qtia")="fdabbecjmkhfkntorlsvfgzkkupwxyqtia"
function minimizeStringValue(s: string): string {
    //1. 利用最小堆优先级队列 整理好替换'?'的逻辑顺序
    const minHeap = new MinPriorityQueue({
        compare: (a, b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0];
            }
            return a[1] - b[1];
        }
    });

    //2. 设定计数器 
    // - 记录每个小写字母出现的次数
    // - 记录 ? 符号在原 s中的下标, 等会儿用作替换 
    const cnt = new Array(26).fill(0);
    const questionIdx = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '?') {
            questionIdx.push(i);
        } else {
            const index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            cnt[index]++;
        }
    }

    //3. 把s中小写字母的计数放入优先级队列中 初始化优先级队列
    for (let i = 0; i < cnt.length; i++) {
        minHeap.enqueue([cnt[i], i]);
    }

    //因为Javascript的字符串是immutable的, 所以转成mutable的数组，等会儿按照questionIdx替换？符号
    const ans = s.split('');

    //先把需要替换的字符准备好, 细节: 等会儿需要先排序后替换
    const tmp = new Array(questionIdx.length).fill(0);

    //4.1 先准备
    for (let i = 0; i < tmp.length; i++) {
        //利用优先级队列的性质来准备需要替换的字符
        const [dequeueCnt, dequeueIndex] = minHeap.dequeue();
        tmp[i] = dequeueIndex;
        minHeap.enqueue([dequeueCnt + 1, dequeueIndex]);
    }
    //4.2 再排序
    tmp.sort((a, b) => a - b);
    //4.3 后替换
    for (let i = 0; i < tmp.length; i++) {
        const idx = questionIdx[i];
        ans[idx] = String.fromCharCode(tmp[i] + 'a'.charCodeAt(0));
    }
    return ans.join('');

}