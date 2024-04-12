// @algorithm @lc id=215 lang=typescript 
// @title kth-largest-element-in-an-array
// @test([3,2,1,5,6,4],2)=5
// @test([3,2,3,1,2,4,5,5,6],4)=4
// @test([7,6,5,4,3,2,1],2)=6
function findKthLargest(nums: number[], k: number): number {
    const minHeap = new Heap2((a, b) => a < b)
    const maxHeap = new Heap2((a, b) => a > b)
    const n = nums.length
    const target = n - k
    for (const num of nums) {
        maxHeap.insert(num)
        minHeap.insert(maxHeap.extract())
        if (maxHeap.length < target) {
            maxHeap.insert(minHeap.extract())
        }
    }
    return minHeap.top()
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
            if(!compareFunc(container[exchange], container[index])){
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