/**
 * 在已排序数组中查找元素的出现的第一个和最后一个位置
 */

 function searchRange(nums, target) {
  // 问题转变为通过二分查找寻找左边界和右边界
  const leftIndex = binarySearch(nums, target, true);
  const rightIndex = binarySearch(nums, target, false);
  return [leftIndex, rightIndex];
};

function binarySearch(arr, target, isFindLeft) {
  let res = -1;   // 找不到默认返回-1
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while(left <= right) {        // O(logn)
      mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
          // 在数组的右侧
          left = mid + 1;
      } else if (arr[mid] > target) {
          // 在数组的左侧
          right = mid - 1;
      } else {
          // 命中
          res = mid;
          if (isFindLeft) {
              // 如果是在查找左边界
              right = mid - 1;
          } else {
              // 在查找有边界
              left = mid + 1;
          }
      }
  }
  return res;
}





// js数组循环方法   indexOf(), lastIndexOf()；   findIndex() , findLastIndex()