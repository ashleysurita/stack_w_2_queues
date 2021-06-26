# stack_w_2_queues

### Leetcode
https://leetcode.com/problems/implement-stack-using-queues/

### Formation
```
/*
Q. Implement the following operations of a stack using queues:
     - push(x): Push element x onto stack.
     - pop(): Removes the element on top of the stack.
     - top(): Get the top element.
     - empty(): Return whether the stack is empty.

Note: 
- You must use only standard operations of a queue, which means only push to back, peek/pop from front, size, and is empty operations are valid.
- Depending on your language, queue may not be supported natively.
- You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
- You may assume that all operations are valid (e.g. no pop or top operations will be called on an empty stack).

Examples:
//     stack = MyStack()
//     stack.push(3)
//     stack.push(7)
//     stack.pop()        // returns 3
//     stack.isEmpty()    // returns False
//     stack.pop()        // returns 7
//     stack.isEmpty()    // returns True
*/

class MyStack {
    // Write your code here.
    
    constructor() {
        // Write your code here.
    }

    // Push element x onto stack.
    push(x) {
        // Write your code here.
    }

    // Removes the element on top of the stack and returns that element.
    pop() {
        // Write your code here.
    }

    // Get the top element
    top() {
        // Write your code here.
    }
        
    //Returns whether the stack is empty.
    isEmpty() {
        // Write your code here.
    }
}

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
```
