/**
 * 最长回文子串的长度
 * @param {*} s 
 */

// 暴力循环  ---  超出时间限制了
function longestPalindrome(s) {
    if (s.length === 0) {
        return '';
    } else if (s.length === 1) {
        return s;
    }
    let max = 0;
    let str = '';   // 用于存储反向子串

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




// 用动态规划： 思路看题解
function longestPalindrome02(s) {
    const len = s.length;
    // 长度小于2，一定为回文形式的
    if (len < 2) {
        return s;
    }

    let maxLen = 1;
    let start = 0;
    // dp[i][j] 表示 s[i,,,,,j]的子串是否为回文子串
    let dp = new Array(len);  // dp应该是个二维数组
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len);
        dp[i][i] = true;
    }

    console.log('---', dp)

    const sArr = s.split(',');
    // 枚举子串的长度，最小是2
    for (let l = 2; l <= len; l++) {
        // 枚举左边界
        for (let i = 0; i < len; i++) {
            let j = l + i -1;   // 根据子串长度l和左边界，可以确定右边界的坐标
            if (j >= len) {
                break;
            }

            if (sArr[i] !== sArr[j]) {
                dp[i][j] = false;
            } else {
                if (l <= 3) {
                    // 此时，如果sArr[i] === sArr[j], 说明是一个回文串
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i+1][j-1];
                }
            }

            // 找到最大的长度
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                start = i;
            }
        }
    }

    return s.substring(start, start+maxLen-1);
}


const str = 'babad';

const s = longestPalindrome02(str);

console.log(s);