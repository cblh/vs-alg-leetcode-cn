// @algorithm @lc id=3354 lang=typescript 
// @title replace-question-marks-in-string-to-minimize-its-value
// @test("???")="abc"
// @test("a?a?")="abac"
function minimizeStringValue(s: string): string {
    const cnt: number[] = new Array(26).fill(0);
        let k = 0;
        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            if (c === '?') {
                ++k;
            } else {
                ++cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)];
            }
        }
        
        const pq: [number, number][] = [];
        for (let i = 0; i < 26; ++i) {
            pq.push([cnt[i], i]);
        }
        
        pq.sort((a, b) => a[0] - b[0]);

        const t: number[] = new Array(k);
        for (let i = 0; i < k; ++i) {
            const [v, c] = pq.shift()!;
            t[i] = c;
            pq.push([v + 1, c]);
            pq.sort((a, b) => a[0] - b[0]);
        }

        t.sort((a, b) => a - b);

        let j = 0;
        const resultArray: string[] = s.split('');
        for (let i = 0; i < s.length; i++) {
            if (resultArray[i] === '?') {
                resultArray[i] = String.fromCharCode(t[j++] + 'a'.charCodeAt(0));
            }
        }
        
        return resultArray.join('');
}
function minimizeStringValue2(s: string): string {
    const minPriorityQueue = new MinPriorityQueue2()
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        minPriorityQueue.enqueue({
            count: 0,
            char: String.fromCharCode(i)
        }, 0)
    }
    const arr: string[] = []
    for (const char of s) {
        if (char === '?') {
            const { count, char } = minPriorityQueue.dequeue().element
            arr.push(char)
            minPriorityQueue.enqueue({
                count: count + 1, char
            }, count)
        } else {
            const charCode = char.charCodeAt(0)
            map.set(charCode, (map.get(charCode) ?? 0) + 1)
            arr.push(char)
        }
    }
    return arr.join('')
};

class MinPriorityQueue2 {
    items: any[]
    constructor() {
        this.items = [];
    }
    // 优先队列添加元素，要根据优先级判断在队列中的插入顺序
    enqueue(element, priority) {
        let queueElement = {
            element: element,
            priority: priority
        };

        if (this.isEmpty()) {
            this.items.push(queueElement);
        } else {
            let added = false;
            for (let i = 0; i < this.size(); i++) {
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }

            if (!added) {
                this.items.push(queueElement);
            }
        }
    }

    // 移除队列的第一个元素，并返回被移除的元素
    dequeue() {
        return this.items.shift();
    };

    // 返回队列的第一个元素
    front() {
        return this.items[0];
    };

    // 判断是否为空队列
    isEmpty() {
        return this.items.length === 0;
    };

    // 获取队列的长度
    size() {
        return this.items.length;
    };

    // 清空队列
    clear() {
        this.items = [];
    };

    // 打印队列里的元素
    print() {
        let strArr = [];

        strArr = this.items.map(function (item) {
            return `${item.element}->${item.priority}`;
        });

        console.log(strArr.toString());
    }
}