function levelOrder(root){
    if(root == null) return []

    const queue = [root]
    const result = []

    while(queue.length > 0){
        let levelSize = queue.length
        let levelNode = []

        for(let i=0; i< levelSize ; i++){
            const node = queue.shift()
            levelNode.push(node.val)

            if(node.left){
                queue.push(node.left)
            }

            if(node.right){
                queue.push(node.right)
            }
        }

        result.push(levelNode)
    }
}