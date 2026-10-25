class Solution {
    /**
     * @param {number[]} target
     * @param {number[]} arr
     * @return {boolean}
     */
    canBeEqual(target, arr) {
      const m1 = {};
      for (const m of target) {
        if (m in m1) m1[m]++;
        else m1[m] = 1;
      }
      const m2 = {};
      for (const m of arr) {
        if (m in m2) m2[m]++;
        else m2[m] = 1;
      }
      return Object.entries(m1).every(([a, b]) => m2[a] === b);
    }
}
