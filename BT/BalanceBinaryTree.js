// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return checkHeight(root) !== -1

    function checkHeight(node){
        if(!node) return 0

        const leftH = checkHeight(node.left)
        if(leftH === -1) return -1
        const rightH = checkHeight(node.right)
        if(rightH === -1) return -1

        if(Math.abs(leftH-rightH)>1){
            return -1
        }

        return Math.max(leftH,rightH) + 1
    }
};