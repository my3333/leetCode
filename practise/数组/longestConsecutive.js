/**
 * 最长连续序列
 */



// 思路：排序+寻找最长连续子序列
function longestConsecutive(nums) {
    // 1.排序
    nums.sort((a, b) => a - b);
    // 2.从前向后循环数组，如果 当前值 与 上一个值 相同就跳转（继续循环）；如果 当前值 等于 上一个值+1，就进行长度的累积；否则，重新累积长度
    let count = 0;
    let prevNum = Number.MIN_VALUE;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === prevNum) {
            continue;
        }
        if (nums[i] === prevNum + 1) {
            count++;
        } else {
            count = 1;
        }
        prevNum = nums[i];
        res = Math.max(res, count);
    }
    return res;
}


// 思路：使用 set存储数组中的数据，然后循环数组，看看set 中是否存在与 当前值+1 的值，如果存在长度累积+1；如果不存在，说明这个数字是一个新的开始，重新进行累积
function longestConsecutive02(nums) {
    let setArr = [...new Set(nums)];

    let count = 0;
    let res = 0;
    for (let i = 0; i < setArr.length; i++) {
        if (setArr.has(setArr[i] + 1)) {
            count++;
        } else {
            count = 1;
            res = Math.max(res, count);
        }
    }
    return Math.max(res, count);
}