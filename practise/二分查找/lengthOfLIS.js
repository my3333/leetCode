/**
 * 最长递增子序列
 */

 function lengthOfLIS(nums) {
  // 用arr（视为栈结构）存储符合要求的元素。循环数组，比较前一个值和后一个值的大小，如果前一个值小于后一个值，且前一个值比栈顶元素大，则前一个值入栈。
  let arr = [];
  for (let i = 0; i < nums.length; i++) {  // 注意边界
      const alen = arr.length;
      if (nums[i] <= nums[i + 1]) {
          if (alen) {
              // 有元素
              arr = handleLastNumber(nums[i], arr);
          } else {
              // 没元素
              arr.push(nums[i]);
          }
      }
  }
  return arr.length;
};

function handleLastNumber(target, arr) {
  const len = arr.length;
  if (len) {
      if (target > arr[len - 1]) {
          arr.push(target);
      } else if (target < arr[len - 1]) {
          arr.pop();   // 栈顶元素出栈
          handleLastNumber(target, arr);
      } else {
          // 和栈顶元素相等
          return arr;
      }
  } else {
      return arr;
  }
}

console.log(lengthOfLIS([0,1,0,3,2,3]))


// 动态规划
// https://leetcode.cn/problems/longest-increasing-subsequence/
function lengthOfLIS02(nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  // dp 数组， dp[i] 的值为 以nums[i]结尾的 最长上升子序列 的长度。 （也就是nums中， nums[i]前面比它小的数有几个 + 自己）
  let dp = new Array(nums.length).fill(1);   // 假设没有比自己小的，就默认为1
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        // 如果nums[i]前面的某些值比nums[i]的值小
        dp[i] = Math.max(dp[j] + 1, dp[i]);   // 为什么
      }
    }
  }

  let res = 0;
  dp.forEach(item => {
    res = Math.max(item, res)
  });
  return res;
}