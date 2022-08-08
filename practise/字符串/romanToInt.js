function romanToInt(s) {
    const hashMap = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };
    let res = 0;
    let len = s.length;
    // 从左向右遍历
    for (let i = 0; i < len; ++i) {
        console.log(hashMap[s[i]], hashMap[s[i+1]])
        if (i < len - 1 && hashMap[s[i]] >= hashMap[s[i+1]]) {
            // 左边的值比右边的值大
            res = res + hashMap[s[i]];
        } else {
            // 左边的值比右边的小
            res = res - hashMap[s[i]];
        }
    }
    return res;
};

console.log('romanToInt---', romanToInt('III'));

// 
function romanToInt(s) {
    const hashMap = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };
    let res = 0;
    let len = s.length;
    // 从左向右遍历
    for (let i = 0; i < len; ++i) {
        if (i < len - 1 && hashMap[s[i]] < hashMap[s[i+1]]) {   // 为什么必须是小于呢？
            // 左边的值比右边的小
            res = res - hashMap[s[i]];
        } else {
            // 左边的值比右边的值大
            res = res + hashMap[s[i]];
        }
    }
    return res;
};


// 把规则换成更多的枚举: 正则 + switch + 循环加法
function switchMap() {
    switch(roman) {
        case I:
            return 1;
        case V:
            return 5;
        case X:
            return 10;
        case L:
            return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            case 'a': return 4;
            case 'b': return 9;
            case 'c': return 40;
            case 'd': return 90;
            case 'e': return 400;
            case 'f': return 900;
    }
}
function romanToInt2(s) {

}


