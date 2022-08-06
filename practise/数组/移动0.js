/**
 * 移动0
 */


// 从后向前循环，这样可以保证数组前面的数字下标不变
function moveZeroes(nums) {
    let len = nums.length;
    for (let i = len - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            // 删除0
            nums.splice(i, 1);
            // 放在数组结尾
            nums.push(0);
        }
    }

    return nums;
}

const arr = [0,1,0,3,12];
console.log(moveZeroes(arr));



// 使用双指针：左指针指向当前已经处理好的序列的尾部，右指针指向待处理序列的头部。
// 右指针不断向右移动，每次右指针指向非零数，则将左右指针对应的数交换，同时左指针右移。
function moveZeroes02(nums) {
    let len = nums.length, left = 0, right = 0;
    while(right < len) {
        if (nums[right] !== 0) {
            swap(nums, left, right);
            left++;
        }
        right++;
    }
    return nums;
}
function swap(nums, left, right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
}


const arr02 = [0,1,0,3,12];
console.log(moveZeroes02(arr));
