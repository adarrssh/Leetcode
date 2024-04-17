var inorderTraversal = function(root) {
    const output = []

    traverse(root)
    return output 
    
    function traverse(node){
        if(node ==  null) return 

        traverse(node.left)
        output.push(node.val)
        traverse(node.right)
    }
};