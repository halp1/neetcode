// /**
//  * Definition for a binary tree node.
//  * class TreeNode {
//  *     constructor(val = 0, left = null, right = null) {
//  *         this.val = val;
//  *         this.left = left;
//  *         this.right = right;
//  *     }
//  * }
//  */

// class Solution {
//     /**
//      * @param {TreeNode} root
//      * @return {boolean}
//      */
//     isEvenOddTree(root) {
//       const queue = [];

//       let state = [0, 0];

//       queue.push([root, 0]);


//       while (queue.length > 0) {
//         if (queue[0][0] === null) {
//           queue.splice(0, 1);
//           continue;
//         }
//         const [[node, level]] = queue.splice(0, 1);

//         if (level > state[0]) {
//           state = [level, node.val];
//         } else {
//           if (state[0] % 2 == 0) {
//             if (node.val % 2 == 0 || node.val <= state[1]) return false;
//           } else {
//             if (node.val % 2 === 1 || node.val >= state[1]) return false;
//           }
//           state = [level, node.val];
//         }

//         queue.push([node.left, level + 1], [node.right, level + 1]);
//       }

//       return true;
//     }
// }

class Solution {
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  isEvenOddTree(root) {
    if (!root) return true;

    let currentLevel = [root];
    let level = 0;

    while (currentLevel.length > 0) {
      const nextLevel = [];
      const isEvenLevel = level % 2 === 0;
      let prevVal = null;

      for (const node of currentLevel) {
        // 1. Check parity
        if (isEvenLevel) {
          // Even levels must have strictly ODD values
          if (node.val % 2 === 0) return false;
          // Must strictly increase
          if (prevVal !== null && node.val <= prevVal) return false;
        } else {
          // Odd levels must have strictly EVEN values
          if (node.val % 2 !== 0) return false;
          // Must strictly decrease
          if (prevVal !== null && node.val >= prevVal) return false;
        }

        prevVal = node.val;

        // 2. Only push existing children
        if (node.left) nextLevel.push(node.left);
        if (node.right) nextLevel.push(node.right);
      }

      currentLevel = nextLevel;
      level++;
    }

    return true;
  }
}