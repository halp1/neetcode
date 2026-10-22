class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    makeGood(s) {
      while (true) {
        let found = false;

        let i = 0;
        while (i < s.length - 1) {
          if (s[i].toLowerCase() == s[i + 1].toLowerCase() && s[i] != s[i + 1]) {
            s = s.slice(0, i) + s.slice(i + 2);
            found = true;
          } else {
            i++;
          }
        }

        if (!found) break;
      }

      return s;
    }
}
