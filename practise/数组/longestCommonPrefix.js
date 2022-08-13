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


// 暴力循环+边界条件  ----> 需要优化代码结构 todo
function findMaxLenPre(arr) {
  if (!arr || !arr.length) {
    return '';
  }
  const first = arr[0];
  let maxLenPre = '';
  for (let i = 1; i < arr.length; i++) {
    // 第一个和第二个比较是否有公共前缀，没有的话就直接返回，有的话就继续比较后面的字符串
    const str = arr[i];
    if (str.substring(0, 1) !== first.substring(0, 1)) {
      return '';
    }

    // 如果已经有公共前缀了，就用后面的字符串和已有的公共前缀去比较，获取到最长的公共前缀
    if (maxLenPre) {
      for (let k = 0; k < arr[i].length; k++) {
        if (k <= maxLenPre.length && arr[i].substring(0, k) === maxLenPre.substring(0, k)) {
          maxLenPre = arr[i].substring(0, k);
        }
      }
    }

    // 遍历后一个字符串，判断是否有公共前缀，有的话就更新前缀
    for (let j = 0; j < str.length; j++) {
      if (str.substring(j, j+1) === first.substring(j, j+1) && j <= first.length -1) {
        if (maxLenPre === str.substring(0, j) && maxLenPre === first.substring(0, j)) {
          // maxLenPre = str.substring(0, j+1);
          maxLenPre = `${maxLenPre}${str.substring(j, j+1)}`;
        }
      }
    }
  }

  return maxLenPre;
}


const arr = ["aaa","aa","aaa"];
const s = findMaxLenPre(arr);
console.log(s);
