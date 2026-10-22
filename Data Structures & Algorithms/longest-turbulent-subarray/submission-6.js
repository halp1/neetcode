class Solution {
  /**
   * @param {number[]} arr
   * @return {number}
   */
  maxTurbulenceSize(arr) {
    let maxSize = 1;
    let start = 0;
    let end = 1;
    while (end < arr.length && arr[start] == arr[end]) {
      start++; end ++;
    }
    while (end < arr.length) {
      if (end < start + 2) {
        end++;
      } else {
        const v1 = arr[end - 2] > arr[end - 1];
        const v2 = arr[end - 1] > arr[end];
        if (v1 != v2 && arr[end - 2] != arr[end - 1] && arr[end] != arr[end - 1]) {
          end++;
        } else {
          start = end - 1;
        }
      }

      maxSize = Math.max(end - start, maxSize);
    }

    return maxSize;
  }
}
