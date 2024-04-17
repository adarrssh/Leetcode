/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    const diameter = [0]
    height(root, diameter)
    return diameter[0]
};

function height(node,diameter){
    if(!node){
        return 0
    }

    let leftH = height(node.left,diameter)
    let rightH = height(node.right, diameter)
    diameter[0] = Math.max(diameter[0],leftH+rightH)

    return 1 + Math.max(leftH,rightH)
}