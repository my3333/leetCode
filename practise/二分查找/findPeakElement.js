/**
 * 寻找数组中的峰值，并返回任一个满足条件的坐标
 */


function findPeakElement(nums) {
  const len = nums.length;
  for (let i = 0; i < nums.length; i++) {    // O(n)
    //  排除不符合条件的值，剩下的就是符合条件的
    let flag = true;
    if (i - 1 > 0) {
      if (nums[i] <= nums[i-1]) {
        flag = false;
      }
    }
    if (i + 1 < n) {
      if (nums[i] <= nums[i+1]) {
        flag = false;
      }
    }

    if (flag) return i;
  }
  return -1;
}


// 二分法
