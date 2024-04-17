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
var isSymmetric = function(root) {
    return root === null || search(root.left, root.right);

    function search(leftNode, rightNode) {
        // If both nodes are null, they are symmetric
        if (!leftNode && !rightNode) return true;
        // If one of the nodes is null or their values are different, they are not symmetric
        if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;

        // Recursively check symmetry of the left and right subtrees
        return search(leftNode.left, rightNode.right) && search(leftNode.right, rightNode.left);
    }
};
