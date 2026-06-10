class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let word of strs){
            const sortedWord = word.split('').sort().join('');
            if(!map.has(sortedWord)){
                map.set(sortedWord, [word]);
            }else{
                map.set(sortedWord, [...map.get(sortedWord), word])
            }

        }

        return [...map.values()];
    }
}
