/**
 * 二分查找
 * 1.要求：有序的数组；查找的数据只能是一个，不能是多个
 * 2.基本思路：三个指针 left、right、mid。每次的查找都将目标值和arr[mid]值进行比较，且每次查找都会缩小1/2的查找范围。
 * 3.时间复杂度为O(log n)
*/

/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */
 function search(nums: number[], target: number): number {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  while(leftIndex <= rightIndex) {
      let midIndex = Math.floor((leftIndex + rightIndex) / 2);
      if (nums[midIndex] < target) {
          leftIndex = midIndex + 1;
      } else if (nums[midIndex] > target) {
          rightIndex = midIndex - 1;
      } else {
          return midIndex;
      }
  }
  return -1;
};

