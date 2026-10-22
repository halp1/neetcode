class Solution {
    /**
     * @param {number[]} tickets
     * @param {number} k
     * @return {number}
     */
    timeRequiredToBuy(tickets, k) {
      const queue = [...tickets.map((x, i) => [x, i])];
      let t = 0;

      while (true) {
        t++;
        const [[ct, idx]] = queue.splice(0, 1);

        if (ct == 1) {
          if (idx === k) return t;
        } else
        queue.push([ct - 1, idx]);
      }
    }
}
