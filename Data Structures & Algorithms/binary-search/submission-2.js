class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
      let start = 0;
      let end = nums.length;

      while (end > start) {
        let mid_idx = start + Math.floor((end - start) / 2);
        if (nums[mid_idx] === target) return mid_idx;
        if (target > nums[mid_idx]) start = mid_idx + 1;
        else end = mid_idx;
      }

      return -1;
    }
}
