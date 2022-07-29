/**
 *  删除有序数组中的重复项
 * @param {*} nums 
 * @returns 
 */

function removeDuplicates(nums) {
  // 在数组头部进行插入操作
  let pre = nums[0];  // 用于和数组的值进行比较
  let cur = 0;  // 用于存储只出现过一次的值的下标
  for (let i = 0; i< nums.length; i ++) {
      pre = nums[cur];
      if (nums[i] > pre) {
         nums[++cur] = nums[i];
      }
  }
  return cur + 1;
 };