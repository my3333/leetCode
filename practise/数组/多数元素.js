/**
 * 返回数组中出现次数大于 Math.floor(n/2)的元素
 */


// Map结构, 时间复杂度为O(n), 空间复杂度为O(n)
function majorityElement(nums) {
    // 存储每个元素出现的次数
    let map = new Map();
    nums.forEach(item => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    });
    console.log(map)
    // 寻找多数元素
    for (let [key, value] of map) {
        if (value > Math.floor(nums.length / 2)) {
            return key
        }
    }
}



// 排序，那么在数组n/2位置上的元素一定是多数元素
function majorityElement02(nums) {
    nums.sort((a, b) => a-b);
    return nums[Math.floor(nums.length / 2)];
}


const arr = [6, 5,5];
const k = majorityElement(arr);
const k2 = majorityElement02(arr);
console.log(k)
console.log(k2)