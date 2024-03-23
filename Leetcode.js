class MinHeap {
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
            if (this.heap[index] < this.heap[parentIndex]) {
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
            if (childIndex + 1 < n && this.heap[childIndex + 1] < this.heap[childIndex]) {
                childIndex++;
            }
            if (this.heap[childIndex] < this.heap[index]) {
                this.swap(index, childIndex);
                index = childIndex;
            } else {
                break;
            }
        }
    }

    // Method to insert a new element into the heap
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    // Method to get the minimum element from the heap
    getMin() {
        return this.heap[1];
    }

    // Method to remove and return the minimum element from the heap
    extractMin() {
        if (this.heap.length <= 1) {
            return null;
        }

        if(this.heap.length === 2){
            return this.heap.pop()
        }
        const minValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.bubbleDown(1);
        return minValue;
    }

    isEmpty(){
        return this.heap.length === 1
    }
}


function sortKSortedArray(arr, k) {
    const minHeap = new MinHeap();
    const sortedArray = [];

    for (let i = 0; i <=  k; i++) {
        minHeap.insert(arr[i]);
    }

    for (let i =  k + 1; i < arr.length; i++) {
        sortedArray.push(minHeap.extractMin()); 
        minHeap.insert(arr[i]); 
    }

    while (!minHeap.isEmpty()) {
        sortedArray.push(minHeap.extractMin());
    }

    return sortedArray;
}

// Example usage:
const arr = [6, 5, 3, 2, 8, 10, 9];
const k = 3;
console.log(sortKSortedArray(arr, k)); // Output: [2, 3, 5, 6, 8, 9, 10]