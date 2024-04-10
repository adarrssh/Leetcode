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

    // Method to check if the heap is empty
    isEmpty() {
        return this.heap.length === 1;
    }
}

// Function to find the minimum cost of connecting ropes
function minCostToConnectRopes(ropes) {
    if (ropes.length === 0) return 0;

    const minHeap = new MaxHeap();

    // Insert all rope lengths into the min-heap
    for (let rope of ropes) {
        minHeap.insert(rope);
    }

    let totalCost = 0;

    // Merge ropes until there's only one rope left
    while (!minHeap.isEmpty() && minHeap.heap.length > 2) {
        const rope1 = minHeap.extractMin();
        const rope2 = minHeap.extractMin();
        const mergedRope = rope1 + rope2;
        totalCost += mergedRope;
        minHeap.insert(mergedRope);
    }

    return totalCost;
}

// Sample Input
const ropes = [1,2,3,4,5];

// 5 8 11 13 24

// Calculate the minimum cost
const minCost = minCostToConnectRopes(ropes);
console.log(minCost); // Output: 29
