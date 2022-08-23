/**
 * 581题
 */


// 排序的时间复杂的为 O(nlogn)， 遍历的时间复杂度为O(n);  所以总的时间复杂度为O(nlogn)
// 因为要存储排序后的数组，所以空间复杂度为O(n)
function findUnsortedSubarray(nums) {
    if (!nums.length || nums.length === 1 || isSorted(nums)) {
        return 0;
    }
    // 对无序数组进行排序
    const numsSort = [...nums].sort((a, b) => a-b);
    let left = 0, right = numsSort.length - 1;
    while (nums[left] === numsSort[left]) {
        left++;
    }
    while(nums[right] === numsSort[right]) {
        right--;
    }
    return right - left +1;
};

function isSorted(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]) {
            return false;
        }
    }
    return true;
}




// 双指针+一次遍历 双向扫描
function findUnsortedSubarray02(nums) {
    const len = nums.length;
    let max = -Number.MAX_VALUE, right = -1;  // 空间复杂度为O（1）
    let min = Number.MAX_VALUE, left = -1;
    for (let i = 0; i < len; i++) {   //  时间复杂度为O（n）
        //  寻找最后一个降序的地方
        if (max > nums[i]) {
            right = i;
        } else {
            max = nums[i];
        }
        //  寻找第一个降序的地方
        if (min < nums[len - i -1]) {
            left  = len-i-1;
        } else {
            min = nums[len - i - 1];
        }
    }
    return right === -1 ? 0 : right - left +1;

}


const nums = [2,6,4,8,10,9,15];
const res = findUnsortedSubarray02(nums);
console.log(res);