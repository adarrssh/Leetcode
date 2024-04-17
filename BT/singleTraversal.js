                            
// Node class for the binary tree
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}


function preInPostTraversal(root) {
    let pre = [];
    let inOrder = [];
    let post = [];

    if (!root) {
        return [];
    }


    let stack = [];


    stack.push([root, 1]);

    while (stack.length > 0) {
        let [node, state] = stack.pop();

        
        if (state === 1) {
 
            pre.push(node.data);

            state = 2;

            stack.push([node, state]);

            if (node.left !== null) {
                stack.push([node.left, 1]);
            }
        }
        else if (state === 2) {

            inOrder.push(node.data);
e
            state = 3;

            stack.push([node, state]);


            if (node.right !== null) {
                stack.push([node.right, 1]);
            }
        }
        else {

            post.push(node.data);
        }
    }

    // Returning the traversals
    return [pre, inOrder, post];
}

// Function to print
// the elements of an array
function printArray(arr) {
    // Iterate through the
    // array and print each element
    for (let val of arr) {
        process.stdout.write(val + " ");
    }
    process.stdout.write("\n");
}

// Main function
function main() {
    // Creating a sample binary tree
    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);

    // Getting the pre-order,
    // in-order, and post-order traversals
    let traversals = preInPostTraversal(root);

    // Extracting the 
    // traversals from the result
    let pre = traversals[0];
    let inOrder = traversals[1];
    let post = traversals[2];

    // Printing the traversals
    process.stdout.write("Preorder traversal: ");
    printArray(pre);

    process.stdout.write("Inorder traversal: ");
    printArray(inOrder);

    process.stdout.write("Postorder traversal: ");
    printArray(post);
}

main();
                            
                        