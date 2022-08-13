/**
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/
 */


// 二分搜索法：如果中间的数小于最右边的数，则右半段是有序的，若中间数大于最右边数，则左半段是有序的，我们只要在有序的半段里用首尾两个数组来判断目标值是否在这一区域内，这样就可以确定保留哪半边了
function search(nums, target) {
    if (nums.length === 1) {
        return nums[0] === target ?  0 : -1;
    }
    // 因为进行了旋转，所以一定有一部分数是有序的
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < nums[right]) {
            // 如果中间的数小于最右边的数，则右半段是有序的
            if (nums[mid] < target && target <= nums[right]) {
                left = mid+1;
            } else {
                right = mid -1;
            }
        } else {
            // 如果中间的数大于最右边的数，则左半段是有序的
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

    }
    return -1;
};
// 二分查找的时间复杂度 O(logn)；  空间复杂度为 O(1)
