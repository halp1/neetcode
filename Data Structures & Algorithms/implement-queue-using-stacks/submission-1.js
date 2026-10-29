class MyQueue {
    constructor() {
      this.i = [];
      this.o = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
      this.i.push(x);
    }

    flush() {
        this.o = this.i.toReversed();
        this.i = [];
    }

    /**
     * @return {number}
     */
    pop() {
    if (this.o.length === 0) this.flush();
    return this.o.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        if (this.o.length === 0) this.flush();
        return this.o.at(-1);
    }

    /**
     * @return {boolean}
     */
    empty() {
      return this.o.length === 0 && this.i.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
