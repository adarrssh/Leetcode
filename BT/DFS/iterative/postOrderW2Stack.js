function postOrder(root) {
    const ans = []

    if (root === null) return ans

    const stack1 = []
    const stack2 = []

    stack1.push(root)

    while (stack1.length > 0) {
        let currentNode = stack1.pop()

        stack2.push(currentNode)

        if (currentNode.left) {
            stack1.push(currentNode.left)
        }

        if (currentNode.right) {
            stack1.push(currentNode.right)
        }
    }

    while (stack2.length > 0) {
        let currentNode = stack2.pop()
        ans.push(currentNode.val)
    }

    return ans
}
