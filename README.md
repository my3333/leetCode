2022-07-21
#01 最长递增子序列， 自己写的暴力循环没写出来； 答案是动态规划，看了答案理解了思路，但是不理解为什么要 dp[i] = Math.max(dp[j] + 1, dp[i]); --->关键是不理解动态规划算法
#02 寻找数组中的峰值， 暴力循环可以理解； 答案是二分查找  没理解。 ---> 二分查到的使用情况？

2022-07-22
#01 盛水的最大容器面积： 问题的关键是面积的大小取决去两个高度中最小的那个。
    #自己想到的是解法是双层循环，第一层循环可以固定第一个高度，第二层循环的范围在 0~第一个值的坐标， 计算面积时取最小高度 * 宽度。
    #题解：双指针，从两侧向中间逼近。每次移动的指针都是高度小的那个。
#02 三数之和为0： 问题的关键是先对数组进行排序 和 跳过相邻的重复元素。
    #题解： 循环+双指针。 第一层循环确定第一个数字，然后在 第一个数字的坐标~len-1 的范围内使用 双指针 确定第二个和第三个数。如果三数之和等于0，则对第二个和第三个进行跳过相邻重复数字的操作，如果三数之和大于0，则向左移动有指针，如果三数之和小于0，则向右移动左指针。
    #暴力循环


    testtijao