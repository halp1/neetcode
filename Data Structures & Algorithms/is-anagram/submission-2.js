class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const b = (s) => {
            const m = {};
            for (const char of s.split("")) m[char] = m[char] ? m[char] + 1 : 1;
            return m;
        }


        const tt = b(t);
        const ss = b(s);
        if (Object.keys(tt).length != Object.keys(ss).length) return false;
        for (const [k, v] of Object.entries(ss)){
            if (tt[k] != v ) return false;
        }

        return true;
    }
}
