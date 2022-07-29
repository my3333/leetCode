/**
 * 最长公共前缀
 */



function longestCommonPrefix() {

}



// 暴力循环
function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) {
    return '';
  }
  const firstLen = strs[0].length;   // 取第一个元素的长度，进行第一层循环
  const len = strs.length;
  for (let i = 0; i < firstLen; i++) {
    const p = strs[0].charAt(i);   // charAt 获取位置i的元素
    for (let j = 1; j < len; j++) {
      if (i == strs[j].length || strs[j].charAt(i) !== p) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}