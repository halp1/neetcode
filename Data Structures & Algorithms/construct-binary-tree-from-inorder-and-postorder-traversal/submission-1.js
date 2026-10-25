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
   * @param {number[]} inorder
   * @param {number[]} postorder
   * @return {TreeNode}
   */
  buildTree(inorder, postorder) {
    let post = postorder.length - 1;

    const build = (start, end) => {
      if (start > end) return null;

      const rootValue = postorder[post];
      post--;

      const root = new TreeNode(rootValue);

      const mid = inorder.indexOf(rootValue);
      root.right = build(mid + 1, end);
      root.left = build(start, mid - 1);

      return root;
    };

    return build(0, post);
  }
}
