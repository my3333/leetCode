function test (line) {
    const strArr = line.split(' ');
    let mapStr = new Map();
    strArr.forEach((item) => {
        if (!mapStr.has(item)) {
            mapStr.set(item, 1);
        } else {
            mapStr.set(item, mapStr.get(item) + 1);
        }
    });
    strArr.sort((a, b) => {
        if (mapStr.get(a) !== mapStr.get(b)) {
            // 比较次数
            return a - b;
        } else {
            const len1 = a.length;
            const len2 = b.length;
            if (len1 !== len2) {
                return len1 - len2;
            } else {
                return a > b;
            }
        }
    })
    console.log(strArr.join(' '))
}

test('This is an apple');