// Node class to represent individual nodes in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Queue class
  class Queue {
    constructor() {
      this.front = null; // Points to the front element of the queue
      this.rear = null; // Points to the rear element of the queue
      this.size = 0; // Size of the queue
    }
  
    // Adds an element to the rear of the queue
    enqueue(data) {
      const newNode = new Node(data);
      if (!this.front) {
        this.front = newNode;
      } else {
        this.rear.next = newNode;
      }
      this.rear = newNode;
      this.size++;
    }
  
    // Removes and returns the front element from the queue
    dequeue() {
      if (!this.front) {
        return "Underflow"; // If queue is empty
      }
      const dequeued = this.front.data;
      this.front = this.front.next;
      if (!this.front) {
        this.rear = null; // Reset rear if queue becomes empty
      }
      this.size--;
      return dequeued;
    }
  
    // Returns the front element of the queue without removing it
    peek() {
      if (!this.front) {
        return "Queue is empty";
      }
      return this.front.data;
    }
  
    // Checks if the queue is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Returns the size of the queue
    getSize() {
      return this.size;
    }
  
    // Prints the queue elements
    printQueue() {
      let current = this.front;
      let str = "";
      while (current) {
        str += current.data + " ";
        current = current.next;
      }
      return str;
    }
  }
  
  // Example usage:
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  console.log("Queue: ", queue.printQueue()); // Output: 10 20 30
  console.log("Front element: ", queue.peek()); // Output: 10
  queue.dequeue();
  console.log("Queue after dequeue: ", queue.printQueue()); // Output: 20 30
  