// Node class to represent individual nodes in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}
  
  // Stack class
  class Stack {
    constructor() {
      this.top = null; // Points to the top element of the stack
      this.size = 0; // Size of the stack
    }
  
    // Pushes a new element onto the stack
    push(data) {
      const newNode = new Node(data);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  
    // Removes and returns the top element from the stack
    pop() {
      if (!this.top) {
        return "Underflow"; // If stack is empty
      }
      const popped = this.top.data;
      this.top = this.top.next;
      this.size--;
      return popped;
    }
  
    // Returns the top element of the stack without removing it
    peek() {
      if (!this.top) {
        return "Stack is empty";
      }
      return this.top.data;
    }
  
    // Checks if the stack is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Returns the size of the stack
    getSize() {
      return this.size;
    }
  
    // Prints the stack elements
    printStack() {
      let current = this.top;
      let str = "";
      while (current) {
        str += current.data + " ";
        current = current.next;
      }
      return str;
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log("Stack: ", stack.printStack()); // Output: 30 20 10
  console.log("Top element: ", stack.peek()); // Output: 30
  stack.pop();
  console.log("Stack after pop: ", stack.printStack()); // Output: 20 10
  