/**
 * 53 最大字数组的和：数组中 和最大 的 连续子序列
 */


// 动态规划
function maxSubArray(nums) {
    let len = nums.length;
    let dp = new Array(len);  // 表示以 nums[i] 为结尾的连续子序列的最大和
    dp[0] = nums[0];

    for (let i = 1; i < len; i++) {
        if (dp[i - 1] <= 0) {   // 如果前面的和为负数或者0，那么就从当前值开始计数
            dp[i] = nums[i];
        } else {   // 如果前面的和为正数，则加上后面的数“一定”会变大， 不考虑当前值是否为正数还是负数
            dp[i] = dp[i-1] + nums[i];
        }
    }

    // 找出最大的和
    let res = dp[0];
    for (let j = 1; j < len; j++) {
        res = Math.max(res, dp[j]);
    }
    return res;
}
// 时间复杂度为O(n)
const arr =  [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr));



// 分治法  todo