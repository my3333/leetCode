/**
 * 寻找重复数：
 */


// 排序和循环比较
// function findDuplicate(nums) {
//   nums.sort();    // 默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === nums[i + 1]) {
//           return nums[i];
//       }
//   }
//   return -1;
// };

// 二分查找
// function findDuplicate(nums) {
//   let taregt = -1;
//   return target;
// };


// 哈希表
function findDuplicate(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return nums[i];
    } else {
      map.set(nums[i]);
    }
  }
  return -1;
};