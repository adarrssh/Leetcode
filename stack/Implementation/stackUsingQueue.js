class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the rear of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    // Return the front element from the queue without removing it
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the queue
    size() {
      return this.items.length;
    }
  
    // Print the queue elements
    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
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
  console.log("Front element: ", queue.front()); // Output: 10
  queue.dequeue();
  console.log("Queue after dequeue: ", queue.printQueue()); // Output: 20 30
  