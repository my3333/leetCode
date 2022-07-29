/**
 * 数组中第K个最大的元素
 */

function findKthLargest(nums) {
  quickSort(nums, 0, nums.length -1);
  return nums[length - k -1];
}


// 标准快速排序
function quickSort(arr, left, right) {
  // 获取基准值所在的坐标
  // const pivotIndex = findPivotIndex(arr, left, right);
  // pivot左侧的区域
  // quickSort(arr, left, pivotIndex - 1);
  // pivot右侧的区域
  // quickSort(arr,  pivotIndex + 1, right)

  const left = 0;
  const right = arr.length - 1;
  const pivot = partitionOfPivot(arr, left, right);
  quickSort(arr.slice(0, pivot))
}

function findPivotIndex(arr, left, right) {
  const pivot = arr[left];
  while (left < right) {  //当left与right指针相遇的时候退出循环，双指针遍历结束
    // 从后往前找
    while(left < right && pivot <= arr[right]) {
      right--;
    }
    if (pivot > arr[right]) {
      arr[left] = arr[right];
    }

    // 从前往后找
    while(left < right && pivot >= arr[left]) {
      left++;
    }
    if (pivot < arr[left]) {
      arr[right] = arr[left];
    }
  }
  arr[left] = pivot;
  return left;
}

function swarp(firstValue, secondValue) {
  const temp = firstValue;
  firstValue = secondValue;
  secondValue = temp;
}

function partitionOfPivot(arr, left, right) {
  let pivot = left;
  while(left < right) {   //当left与right指针相遇的时候退出循环，双指针遍历结束
    // 从后向前查找
    while(left < right && arr[right] >= arr[pivot]) {
      right--;
    }
    if (arr[right] < arr[pivot]) {
      // 交换
      swarp(arr[right], arr[pivot]);
      pivot = right;
    }

    // 从前向后查找
    while(left < right && arr[left] <= arr[pivot]) {
      left++;
    }
    if (arr[left] > arr[pivot]) {
      // 交换
      swarp(arr[left], arr[pivot]);
      pivot = left;
    }
  }
  return pivot;
}

