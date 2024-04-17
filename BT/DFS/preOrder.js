var preorderTraversal = function(root) {
    const output = []
    traverse(root)
    return output
        function traverse(node){
            if(node === null){
                return ;
            }

            output.push(node.val)

            traverse(node.left)
            traverse(node.right)
        
        }
};