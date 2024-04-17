var preorderTraversal = function(root) {
    if(root == null) return []
    const output = []
    const stack = [root]

    while(stack.length>0){
        const topEl = stack[stack.length-1]
        stack.pop()
        output.push(topEl.val)

        if(topEl.right){
            stack.push(topEl.right)
        }

        if(topEl.left){
            stack.push(topEl.left)
        }

    }

    return output
};