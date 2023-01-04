/**
 * 两数之和
 */

// 双重循环
function twoSum(nums, target) {
    let len = nums.length;
    for (let i = 0; i< len; i++) {
        for (let j = i+1; j< len; j++) {
            if (nums[j] + nums[i] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// 边循环边简历hash表
function twoSum2() {
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        // nums.includes(target-cur, i) 数组中是否包含一个元素
        if (nums.findIndex(target-cur) !== -1) {
            return [i, nums.findIndex(target-cur)];
        }
    }
    return [];
}