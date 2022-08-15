/**
 * 448题
 */

// 循环， 时间复杂度为O(n), 空间复杂度为O(n)
 function findDisappearedNumbers(nums) {
    // 声明一个比较数组，用于标记输入数组中出现过的数字。
    let tagArr = new Array(nums.length).fill(0);

    // 可以用set先进行一次去重
    nums.forEach((item, index) => {
        tagArr[item -1] = 1;
    });

    // console.log(tagArr)
    let res = [];
    tagArr.forEach((item, index) => {
        if (!item) {
            res.push(index+1);
        }
    })
    return res;
};


// 原地修改法：循环+hash存储，   时间复杂度为O(n), 空间复杂度为O(1)
function findDisappearedNumbers02(nums) {
    const n = nums.length;
    for (let num of nums) {
        const x = (num - 1) % n;   // num - 1 正好为数组下标
        nums[x] += n;    //   这里是为什么？
    }

    console.log(nums);

    const res = [];
    for (let [i, num] of nums.entries()) {
        if (num <= n) {
            res.push(i+1)
        }
    }
    return res;
};

const nums = [4,3,2,7,8,2,3,1];
const res = findDisappearedNumbers02(nums);
console.log(res);