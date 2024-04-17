var postorderTraversal = function(root) {
    output = []
    printPostorder(root)
    return output
    function printPostorder(node) {
        if (node == null)
            return;
    
        printPostorder(node.left);
    
        printPostorder(node.right);
    
        output.push(node.val)
    }
};