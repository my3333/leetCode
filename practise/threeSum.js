/**
 * 三数之和
 */

// 思路：先排序，可以保证重复的数字是相邻的，方便去重。然后，第一层循环遍历数组，用于取第一个值；第二层循环 在 剩下的区域中使用双指针，用于取第二个和第三个值
function threeSum() {
  const len = nums.length;
  if (len < 3) {
      return [];
  }
  let res = [];
  // 排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
      if (nums[i] > 0) {
        break;    // 第一个数大于零，则三数之和一定大于0；因为数组是按非严格升序排列的。
      }
      // 对第一个数去重
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }

      // 开始双指针，寻找第二个和第三个数
      let left = i + 1;
      let right = len - 1;
      while(left < right) {
          const sum = nums[left] + nums[right] + nums[i];
          if (sum === 0) {
              res.push([nums[i], nums[left], nums[right]]);
              // 对第二个和第三个数去重
              while(left < right && nums[left] === nums[left + 1]) {
                  left += 1;
              }
              while(left < right && nums[right] === nums[right - 1]) {
                  right -= 1;
              }
              // 没有重复的就继续移动指针
              left += 1;
              right -= 1;
          } else if (sum > 0) {
              // 说明右指针对应的值比较大
              right -= 1;
          } else {
              // sum < 0， 说明左指针对应的值比较小
              left += 1;
          }
      }
  }
  return res;
}