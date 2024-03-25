// @algorithm @lc id=3363 lang=typescript 
// @title most-frequent-ids
// @test([2,3,2,1],[3,2,-3,1])=[3,3,2,2]
// @test([5,5,3],[2,-2,1])=[2,0,1]
function mostFrequentIDs(nums: number[], freq: number[]): number[] {
    const cnt = new Map()
    const heap = new Heap2((a, b) => a[0] - b[0] > 0)
    const n = nums.length
    const ans: number[] = []
    for (let i = 0; i < n; i++) {
        const num = nums[i]
        const f = freq[i]
        cnt.set(num, (cnt.get(num) ?? 0) + f)
        heap.insert([cnt.get(num), num])
        while (heap.top()[0] !== cnt.get(heap.top()[1])) {
            heap.extract()
        }
        ans.push(heap.top()[0])
    }
    return ans
};

const swap = (arr: any[], i:number, j:number) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

type CompareFunc = (a:any, b:any)=>boolean;
class Heap2{
    private compareFunc: CompareFunc;
    public container: any[];
    constructor(cmp: CompareFunc){
        this.compareFunc = cmp;
        this.container = [];
    }

    insert(data){
        const { container, compareFunc } = this;

        container.push(data);
        let index = container.length - 1;
        while(index){
            let parent = Math.floor((index - 1)/2);
            if(!compareFunc(container[index], container[parent])){
                return
            }
            swap(container, index, parent);
            index = parent;
        }
    }

    extract(){
        const { container, compareFunc } = this;
        
        swap(container, 0, container.length - 1);
        const result = container.pop();
        const length = container.length;
        let index = 0,
            exchange = 2 * index + 1;
        while(index<length){
            let right = 2 * index + 2;
            if(right < length && compareFunc(container[right], container[exchange])){
                // 右节点大就 作为 exchange 元素跟 parent 对比
                exchange = right;
            }
            if(!container[exchange] || !compareFunc(container[exchange], container[index])){
                // exchange 元素 小于 parent，结束
                break;
            }
            swap(container, exchange, index);
            index = exchange;
            exchange = index * 2 + 1;
        }

        return result;

    }

    top(){
        if(this.container.length === 0 ){
            return null;
        }
        return this.container[0];
    }

    get length(){
        return this.container.length;
    }
}