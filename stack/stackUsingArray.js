class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(item) {
      this.stack.push(item);
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.stack.pop();
      } else {
        throw new Error("Stack is empty. Cannot pop.");
      }
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.stack[this.stack.length - 1];
      } else {
        throw new Error("Stack is empty. Cannot peek.");
      }
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  
    size() {
      return this.stack.length;
    }
  }
  
  // Example usage:
  
  // Create a new stack
  const myStack = new Stack();
  
  // Push elements
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);
  
  // Get the top element without removing it
  console.log("Top of the stack:", myStack.peek());
  
  // Pop elements
  console.log("Popped item:", myStack.pop());