/**
 * 检查一个字符串是否出现在给定的字符串列表里一般可以考虑哈希表来快速判断
 * 
 */


// 动态规划
function wordBreak(s, wordDict) {
    const len = s.length;
    const wordDictSet = new Set(wordDict);   // 空间复杂度为O(n)

    const dp = new Array(len+1).fill(false);   // 
    dp[0] = true;

    for (let i = 1; i<= len; i++) {        // 时间复杂度为O(n^2)
        for (let j = 0; j < i; j++) {      // 
            // substring(n, m); 截取从 n到 m-1的字符串。  substr(n, m) 从n开始，截取长度为m的字符串
            if (dp[j] && wordDictSet.has(s.substr(j, i-j))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[len];
}




// 深度优先搜索+标记
function wordBreak02(s, wordDict) {
    const len = s.length;
    const wordSet = new Set(wordDict);

    //  存储已经计算过的
    const memo = new Array(len);

    const canBreak = (start) => {
        // start 循环开始位置
        if (start === len) {
            return true;  // 为什么返回true
        }

        if (memo[start] !== undefined) {
            return memo[start];
        }

        for (let i = start+1; i <= len; i++) {
            const prefix = s.substring(start, i);
            if (wordSet.has(prefix) && canBreak(i)) {
                memo[start] = true;
                return true;
            }
        }
        memo[start]= false;
        return false;
    }

    return canBreak(0);  // 从下标0开始
}

// const s = "leetcode", wordDict = ["leet", "code"];
// const s = "applepenapple", wordDict = ["apple", "pen"];
// const s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"];
const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"];
const res = wordBreak02(s, wordDict);

console.log(res);