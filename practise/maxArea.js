/**
 * 盛最多水的容器
 */

// 第一反应是暴力循环, 关键是 Math.min(height[i], height[j]) 这里； 运行结果会超时
function maxArea(height) {
  const len = height.length;
  if (len === 0) {
      return 0;
  } else if (len === 1) {
      return height[0];
  } else {
      let maxSize = 0;
      for (let i = 0; i < len; i ++) {
          for (let j = 0; j <= i; j++) {
              maxSize = Math.max(Math.min(height[i], height[j]) * (i - j), maxSize)
          }
      }
      return maxSize;
  }
};

// 双指针：   思路是从两边向中间移动，计算每次的面积，并移动两个中高度最小的那个指针。面积=高度小的指针*两指针之间的距离
function maxArea02(height) {
  const len = height.length;
  let left = 0;
  let right = len - 1;
  let size = 0;
  while(left <= right) {   // 时间复杂度为O(n), 双指针总计最多遍历整个数组一次
    let h = Math.min(height[left], height[right]);    // 关键
    let w = right - left;
    size = Math.max(h * w, size);
    if (h === height[left] || height[left] === height[right]) {
      // 如果左指针高度小,  或者两个指针高度相同
      left = left + 1;
    } else if (h === height[right]) {
      // 如果右指针高度小
      right = right - 1;
    }
  }
  return size;
};