                            
// TreeNode structure
class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to change the values of the nodes
    // based on the sum of its children's values.
    changeTree(root) {
        // Base case: If the current node
        // is null, return and do nothing.
        if (root === null) {
            return;
        }

        // Calculate the sum of the values of
        // the left and right children, if they exist.
        let child = 0;
        if (root.left) {
            child += root.left.val;
        }
        if (root.right) {
            child += root.right.val;
        }

        // Compare the sum of children with
        // the current node's value and update
        if (child >= root.val) {
            root.val = child;
        } else {
            // If the sum is smaller, update the
            // child with the current node's value.
            if (root.left) {
                root.left.val = root.val;
            } else if (root.right) {
                root.right.val = root.val;
            }
        }

        // Recursively call the function
        // on the left and right children.
        this.changeTree(root.left);
        this.changeTree(root.right);

        // Calculate the total sum of the
        // values of the left and right
        // children, if they exist.
        let tot = 0;
        if (root.left) {
            tot += root.left.val;
        }
        if (root.right) {
            tot += root.right.val;
        }

        // If either left or right child
        // exists, update the current node's
        // value with the total sum.
        if (root.left || root.right) {
            root.val = tot;
        }
    }
}

// Function to print the inorder
// traversal of the tree
function inorderTraversal(root) {
    if (root === null) {
        return;
    }
    inorderTraversal(root.left);
    console.log(root.val + " ");
    inorderTraversal(root.right);
}

// Main function
function main() {
    // Create the binary tree
    const root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.right = new TreeNode(1);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(8);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);

    const sol = new Solution();

    // Print the inorder traversal
    // of tree before modification
    console.log("Binary Tree before modification: ");
    inorderTraversal(root);
    console.log("");

    // Call the changeTree function
    // to modify the binary tree
    sol.changeTree(root);

    // Print the inorder traversal
    // after modification
    console.log("Binary Tree after Children Sum Property: ");
    inorderTraversal(root);
    console.log("");
}

// Call the main function
main();

                            
                        