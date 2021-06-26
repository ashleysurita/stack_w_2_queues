var MyStack = function() {
    this.queue = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue = [...this.queue, x]
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // const [...rest, last] = this.queue
    const last = this.queue[this.queue.length - 1]
    this.queue = this.queue.slice(0, this.queue.length - 1)
    return last
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[this.queue.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.isEmpty = function() {
    return this.queue.length === 0
};

// Test Cases
test.startProblem("Implement Stack Using Queues")
var stack1 = new MyStack()
test.test(true, stack1.isEmpty(), 1)
stack1.push(1)
test.test(1, stack1.top(), 2)
stack1.push(2)
test.test(2, stack1.top(), 3)
test.test(2, stack1.pop(), 4)
test.test(false, stack1.isEmpty(), 5)
test.test(1, stack1.pop(), 6)
test.test(true, stack1.isEmpty(), 7)
test.endProblem()  
