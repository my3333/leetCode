/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 * 
 * 什么是中位数：https://baijiahao.baidu.com/s?id=1711870219158983499
 */


// 暴力求解
// 合并两个数组并排序，求数组长度，长度为奇数则中间值为中位数，长度为偶数则中间两个值的平均值为中位数
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // 合并的数组从小到大排序
    let arr = [];
    if (nums1.length === 0 && nums2.length !== 0) {
        arr = nums2;
    } else if (nums1.length !== 0 && nums2.length === 0) {
        arr = nums1;
    } else {
        arr = nums1.concat(nums2).sort((a,b) => a-b);     // 时间复杂度为O(m+n)
    }
    if (arr.length % 2 === 0) {
        // 数组长度为偶数
        return (arr[arr.length / 2] + arr[arr.length / 2 -1]) / 2;
    }
    // 数组长度为奇数
    return arr[Math.floor(arr.length / 2)];
};

// *****************
/**
 * 时间复杂度要求logn,  通常要想到二分查找
 */
// 无需合并数组，找到中位数的位置即可  --- >  第K小数解法：寻找两个有序数组中的第k小的数，其中k为 (m+n) / 2 或 (m+n)/2 +1
function findMedianOfBinaryFind(nums1: number[], nums2: number[]): number {
  const totalLen = nums1.length + nums2.length;
  if (totalLen === 0) {
    return 0;
  }
  if (totalLen % 2 !== 0) {
    // 总长度为奇数
    const minIndex = totalLen / 2;
    const medianNumber = getKthMinValue(nums1, nums2, minIndex + 1);  // 要找到第k小，就要比较到k+1
    return medianNumber;
  } else {
    // 总长度为偶数
    const minIndexLeft = totalLen / 2 - 1;
    const minIndexRight = totalLen / 2;
    const medianNumber = (getKthMinValue(nums1, nums2, minIndexLeft + 1) + getKthMinValue(nums1, nums2, minIndexRight + 1)) / 2;
    return medianNumber;
  }
}

function getKthMinValue(nums1: number[], nums2: number[], k: number): number {
  const len1 = nums1.length, len2 = nums2.length;
  let index1 = 0, index2 = 0;

  while(true) {
    // 其中有一个数组为空
    if (len1 === 0) {
      return nums2[index2 + k - 1];
    }
    if (len2 === 0) {
      return nums1[index1 + k - 1];
    }
    // 总数组的长度仅为2
    if (k === 1) {
      return Math.min(nums1[index1], nums2[index2]);
    }

    // 对两个数据的 0...k/2 部分进行查找
    const half = k / 2;
    const newIndex1 = Math.min(index1 + half, len1) - 1,  newIndex2 = Math.min(index2 + half, len2) - 1;
    const p1 = nums1[newIndex1], p2 = nums2[newIndex2];
    if (p1 <= p2) {
      k -= (newIndex1 - index1 + 1);
      index1 = newIndex1 + 1;
    } else {
      k -= (newIndex2 - index2 + 1);
      index2 = newIndex2 + 1;
    }
  }
}





// 88