/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0, i = 0
    while(i < nums.length){
        if(nums[i] == nums[i + 1]){
            i++
        } else {
            k = k + 1
            nums[k] = nums[i + 1]
            i++
        }
    }
    return(k);
};
