/**
 * 无重复字符的最长子串
 */

function lengthOfLongestSubstring(s) {
  // 使用set结构判断是否有重复字符
  const setArr = new Set();
  const len = s.length;
  // 左指针 用于循环字符串，左指针向前走一步，右指针就也向前走一步，但要判断从左指针 到 右指针 范围内的子串是否有重复字符。
  // 右指针 初始值 为 -1， 因为当左指针为0时，右指针还没有开始移动
  let right = -1;
  let resLen = 0;
  for (let left = 0; left < len; left++) {
    // 此时 left 已经向右移动了，所以要将 set 中最左边的那个值删掉
    if (left !== 0) {
      setArr.delete(s.charAt(left -1))
    }
    while(right+1 < n && !setArr.has(s.charAt(right+1))) {
      setArr.add(s.charAt(right+1));
      ++right;
    }
    // 从 left 到 right 的最长子串的长度
    resLen = Math.max(resLen, right - left + 1)
  }
  return resLen;

}