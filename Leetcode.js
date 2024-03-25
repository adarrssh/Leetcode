const MaxHeap = require('./heap/maxHeap')

const heap = new MaxHeap()
heap.insert(10)
heap.insert(20)
heap.insert(2)
console.log(heap.getMax())