/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  diameterOfBinaryTree(root) {
    const height = (node) => node === null ? 0 : 1 + Math.max(height(node.left), height(node.right));
    
    let max = 0;

    const diameter = (node) => node === null ? 0 : Math.max(height(node.left) + height(node.right), diameter(node.left), diameter(node.right));

    return diameter(root);
  }
}
