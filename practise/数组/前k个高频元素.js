/**
 * 给你一个整数数组 nums 和一个整数 k ，
 * 请你返回其中出现频率前 k 高的元素。
 * 你可以按 任意顺序 返回答案。
 */


// map结构+普通循环： 时间复杂度为O(n), 因为使用了map结构和结果数组res，空间复杂度为O(n)
 function topKFrequent(nums, k) {
    // 利用map结构存储每个数字出现的次数
    let map = new Map();
    nums.forEach((item) => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1)
        }
    });
    // 按按照出现次数降序排列
    const mapArr = Array.from(map).sort((a, b) => b[1] - a[1]);
    let res = [];
    // 取前k个
    for (let i = 0; i < k; i++) {
        res.push(mapArr[i][0]);
    }
    return res;
};



// map+堆排序