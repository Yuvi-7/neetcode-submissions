class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {};

        for(let num of nums){
            if(!obj[num]){
                obj[num] = 1;
            }else{
                return true;
            }
        }
        return false;
    }
}
