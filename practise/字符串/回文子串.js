/**
 * https://leetcode.cn/problems/palindromic-substrings/
 */

// 中心扩展法
 function countSubstrings (s) {
    let count = 0;
    // 循环，可以将每个字符当做中心点
    for (let i = 0; i < s.length; i++) {
        // 取回文字符串的中心点，根据回文串长度是奇数还是偶数，所以j = 1 或 0
        for (let j = 0; j <= 1; j++) {
            let leftIndex = i;
            let rightIndex = i+j;
            // 从中心开始向两侧扩展 s[leftIndex--] === s[rightIndex++]
            while (leftIndex >= 0 && rightIndex < s.length && s[leftIndex--] === s[rightIndex++]) {
                count++;
            }
        }
    }
    return count;
};
// 时间复杂度为 O(n^2)
// 空间复杂度为 O(1)



// 暴力循环： 通过循环，枚举出所有的子串，然后过滤出回文子串的数量


const str = 'abc';
const n = countSubstrings(str);
console.log(n);