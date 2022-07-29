/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
说明：
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？--->不需要额外空间的方法，就往位运算上想
 * @param {*} nums 
 * @returns 
 */

// 哈希表存储每个数字出现的次数
function singleNumber(nums) {
  if (!nums.length) {
      return;
  } else if (nums.length === 1) {
      return nums[0];
  } else {
      // 使用map结构存储每个数字出现的次数，最后返回那个只出现了一次的数字
      let countMap = {};
      nums.forEach((item, index) => {   // 最长的循环，时间复杂度为O(n)
          if (!countMap[item]) {
              countMap[item] = 1;
          } else {
              countMap[item] = countMap[item] + 1;
          }
      });
      for (let key in countMap) {   // 这里也有循环
          if (countMap[key] === 1) {
              return Number(key);
          }
      }
  }
};

// 使用set
// 排序，遍历数组，然后对进行加一个减一个的运算，最后的计算结果就是那个只出现了一次的数字。


// 你可以不使用额外空间来实现吗？--->不需要额外空间的方法，就往位运算上想
/**
 * 1.交换律：a ^ b ^ c <=> a ^ c ^ b
 * 2.任何数于0异或为任何数 0 ^ n => n
 * 3.相同的数异或为0: n ^ n => 0
 */
 function singleNumber04(nums) {
  if (!nums.length) {
      return;
  } else if (nums.length === 1) {
      return nums[0];
  } else {
    // 异或运算
    let resNum = 0;
    for (const n of nums) {
      resNum ^= n
    }
    return resNum;
  }
};
