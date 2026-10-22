class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    checkPowersOfThree(n, last = -1) {
      const power = Math.floor(Math.log(n)/Math.log(3));
      if (power == last) return false;

      return n == 0 ? true : Solution.prototype.checkPowersOfThree(n - Math.pow(3, power), power);
    }
}
