var maxDepth = function(root) {
    if(root == null){
        return 0
    }

    let leftH = maxDepth(root.left)
    let rightH = maxDepth(root.right)

    return   1 + Math.max(leftH,rightH)
};