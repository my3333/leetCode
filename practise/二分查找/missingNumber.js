/**
 * 丢失的数字
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 */

 function missingNumber(nums) {
  // 利用等差数列和
  const n = nums.length;   // [0, n] 内的数字组成新的数组，且不重复
  let add1 = 0;
  let add2 = 0;
  nums.forEach((item, index) => {   // O(n)
      add1 += item;
      add2 += index;
  });
  add2 = add2 + n;

  return add2 - add1;
};

function missingNumber02(nums) {
  // 将数组排序之后，即可根据数组中每个下标处的元素是否和下标相等，得到丢失的数字。
  // [3, 0, 1]==>[0,1,3],   [2,0,1]==>[0,1,2]
  const n = nums.length;
  nums.sort((a, b) => a-b);  // 递增     O(nlogn)
  nums.forEach((item, index) => {       // O(n)
    if (item !== index) {
      return index;
    }
  });
  // 元素和下标都对上了，说明此时缺失的是n
  return n;
};

// 位运算：相同数字异或的0，0和任何数异或都是那个数。
// 
function missingNumber03(nums) {
  // [3, 0, 1]==>[3,0,1, 0,1,2,3]
  const n = nums.length;
  let xor = 0;
  nums.forEach(item => {
    xor ^= item;
  });
  for (let i = 0; i <= n; i++) {
    xor ^= i;
  }
  return xor;
};