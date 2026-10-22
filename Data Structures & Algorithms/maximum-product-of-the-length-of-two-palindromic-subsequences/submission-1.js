class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  maxProduct(s) {
    const palindromic = (s) => {
      for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] != s[s.length - i - 1]) return false;
      }

      return true;
    }

    const valid = [];

    const verify = (vals) => {
      let str = "";
      let mask = 0;
      for (let i = 0; i < vals.length; i++) {
        if (vals[i]) {
          str += s[i];
          mask |= 1 << i;
        }
      }

      if (str.length && palindromic(str)) {
        valid.push([mask, str.length]);
      }
    }

    const process = (history, amount) => {
      if (amount == 1) {
        verify([...history, false]);
        verify([...history, true]);
      } else {
        process([...history, false], amount - 1);
        process([...history, true], amount - 1);
      }
    }

    process([], s.length);

    console.log(valid)

    let max = 1;
    for (let i = 0; i < valid.length; i++) {
      for (let j = i + 1; j < valid.length; j++) {
        const [x, nx] = valid[i];
        const [y, ny] = valid[j];
        if ((x & y) == 0) max = Math.max(max, nx * ny);
      }
    }

    return max;
  }
}
