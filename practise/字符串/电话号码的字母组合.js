const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}

function letterCombinations(digits) {
    if (!digits) {
        return [];
    }
    if (digits.length === 1) {
        return phoneMap[digits[0]].split('');
    }

    let res = [];   // 存储结果
    let combinePath = [];  //组合路径
    backTrack(res, digits, combinePath, digits.length, 0);
    return res;
};

// len：要匹配的结果的长度
// index: 开始匹配的位置
// res: 结果数组
function backTrack(res, digits, combinePath, len, index) {
    if (combinePath.length === len) {   // 回溯（递归）的终止条件
        res.push(combinePath.join(''));
    } else {
        const s = digits.charAt(index);
        const letters = phoneMap[s];
        for (let i = 0; i < letters.length; i++) {
            combinePath.push(letters.charAt(i));
            // 递归
            backTrack(res, digits, combinePath, len, index + 1);
            combinePath.pop();
        }

    }
}


const dg = '23';
const res = letterCombinations(dg);
console.log(res)



// 时间复杂度 O（3^m * 4^n）; 空间复杂度 O（m+n）
// 除了返回值以外，空间复杂度主要取决于哈希表以及回溯过程中的递归调用层数，哈希表的大小与输入无关，可以看成常数，递归调用层数最大为 m+ns

