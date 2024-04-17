// Node structure for the binary tree
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to check if a node is a leaf
    isLeaf(root) {
        return !root.left && !root.right;
    }

    // Function to add the left boundary of the tree
    addLeftBoundary(root, res) {
        let curr = root.left;
        while (curr) {
            // If the current node is not a leaf, add its value to the result
            if (!this.isLeaf(curr)) {
                res.push(curr.data);
            }
        // note here 
        // use else only , otherwise it will be infinite while loop
            if (curr.left) {
                curr = curr.left;
            } 
            else{
                curr = curr.right;
            }
        }
    }

    // Function to add the right boundary of the tree
    addRightBoundary(root, res) {
        let curr = root.right;
        let temp = [];
        while (curr) {
            // If the current node is not a leaf, add its value to a temporary vector
            if (!this.isLeaf(curr)) {
                temp.push(curr.data);
            }
            // Move to the right child if it exists, otherwise move to the left child
            if (curr.right) {
                curr = curr.right;
            } else {
                curr = curr.left;
            }
        }
        // Reverse and add the values from the temporary vector to the result
        for (let i = temp.length - 1; i >= 0; --i) {
            res.push(temp[i]);
        }
    }

    // Function to add the leaves of the tree
    addLeaves(root, res) {
        // If the current node is a leaf, add its value to the result
        if (this.isLeaf(root)) {
            res.push(root.data);
            return;
        }
        // Recursively add leaves of the left and right subtrees
        if (root.left) {
            this.addLeaves(root.left, res);
        }
        if (root.right) {
            this.addLeaves(root.right, res);
        }
    }

    // Main function to perform the boundary traversal of the binary tree
    printBoundary(root) {
        let res = [];
        if (!root) {
            return res;
        }
        // If the root is not a leaf, add its value to the result
        if (!this.isLeaf(root)) {
            res.push(root.data);
        }

        // Add the left boundary, leaves, and right boundary in order
        this.addLeftBoundary(root, res);
        this.addLeaves(root, res);
        this.addRightBoundary(root, res);

        return res;
    }
}

// Helper function to print the result
function printResult(result) {
    for (let val of result) {
        console.log(val + " ");
    }
    console.log();
}

// Creating a sample binary tree
let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(3)
root.left.left.right = new Node(4)
root.left.left.right.left = new Node(5)
root.left.left.right.right = new Node(6)

root.right = new Node(7)
root.right.right = new Node(8)
root.right.right.left = new Node(9)
root.right.right.left.left = new Node(10)
root.right.right.left.right = new Node(11)

let solution = new Solution();

// Get the boundary traversal
let result = solution.printBoundary(root);

// Print the result
console.log("Boundary Traversal: ");
printResult(result);