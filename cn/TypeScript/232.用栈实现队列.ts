// @algorithm @lc id=232 lang=typescript 
// @title implement-queue-using-stacks
class MyQueue {
    stack1: number[]
    stack2: number[]
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }
    push(num: number) {
        this.stack1.push(num)
    }
    move() {
        if (this.stack2.length === 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop()!)
            }
        }
    }
    pop() {
        this.move()
        return this.stack2.pop()
    }
    peek() {
        this.move()
        return this.stack2[this.stack2.length - 1]
    }

    empty() {
        return this.stack1.length === 0 && this.stack2.length === 0
    }
}