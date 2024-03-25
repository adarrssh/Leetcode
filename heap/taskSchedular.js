class MaxHeap {
    constructor() {
        this.heap = [null]; // Use null as the first element for 1-based indexing
    }

    // Helper function to swap two elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Helper function to maintain heap property by moving an element up
    bubbleUp(index) {
        while (index > 1) {
            const parentIndex = Math.floor(index / 2);
            if (this.heap[index].value > this.heap[parentIndex].value) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Helper function to maintain heap property by moving an element down
    bubbleDown(index) {
        const n = this.heap.length;
        while (2 * index < n) {
            let childIndex = 2 * index;
            if (childIndex + 1 < n && this.heap[childIndex + 1].value > this.heap[childIndex].value) {
                childIndex++;
            }
            if (this.heap[childIndex].value > this.heap[index].value) {
                this.swap(index, childIndex);
                index = childIndex;
            } else {
                break;
            }
        }
    }

    // Method to insert a new element into the heap
    insert(value, time) {
        this.heap.push({ value, time });
        this.bubbleUp(this.heap.length - 1);
    }

    // Method to get the maximum element from the heap
    getMax() {
        return this.heap[1];
    }

    // Method to remove and return the maximum element from the heap
    extractMax() {
        if (this.heap.length <= 1) {
            return null;
        }

        if(this.heap.length == 2){
            return this.heap.pop()
        }

        const maxValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.bubbleDown(1);
        return maxValue;
    }
}

// // Example usage:
// const maxHeap = new MaxHeap();
// maxHeap.insert(10, 2);
// maxHeap.insert(20,3);
// maxHeap.insert(15,5);

// console.log(maxHeap.extractMax()); 
// console.log(maxHeap.extractMax()); 
// console.log(maxHeap.extractMax()); 
// console.log(maxHeap.extractMax()); 
const x = ['A','B','A','C','B']
const map = new Map(...x)

for(let [key,value] of map) console.log({key,value})
