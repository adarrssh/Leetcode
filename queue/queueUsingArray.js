class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item) {
      this.queue.push(item);
    }
  
    dequeue() {
      if (!this.isEmpty()) {
        return this.queue.shift();
      } else {
        throw new Error("Queue is empty. Cannot dequeue.");
      }
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.queue[0];
      } else {
        throw new Error("Queue is empty. Cannot peek.");
      }
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  }
  
  // Example usage:
  
  // Create a new queue
  const myQueue = new Queue();
  
  // Enqueue elements
  myQueue.enqueue(10);
  myQueue.enqueue(20);
  myQueue.enqueue(30);
  
  // Get the front element without removing it
  console.log("Front of the queue:", myQueue.peek());
  
  // Dequeue elements
  console.log("Dequeued item:", myQueue.dequeue());