/**
 * 最长回文子串的长度
 * @param {*} s 
 */

// 暴力循环  ---  超出时间限制了
function longestPalindrome(s) {
    if (s.length === 0) {
        return '';
    } else if (s.length === 2 || s.length === 1) {
        return s;
    }

    let max = 0;
    let str = '';   // 用于存储最长回文子串
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j <= s.length; j++) {
            const subs = s.substring(i, j);
            if (isPalindrome(subs) && subs.length > max ) {
                str = subs;
                max = Math.max(max, str.length);
            }
        }
    }
    return str;
};
function isPalindrome(str) {
    // 判断一个字符串是否为回文字符串： 
    // 1.可以split,利用数组 + revrse() + join()   
    // 2.定义一个空字符串，从后面往前取，再拼在结果字符串的前面

    let res = '';
    for (let i =0; i < str.length; i++) {
        let s = str.substring(i, i+1);  // 提取字符
        res = `${s}${res}`
    }
    return res === str;
}




// 用动态规划
function longestPalindrome02() {
    
}