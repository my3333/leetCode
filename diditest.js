let arr = [
    {
        id: 1,
        children: [
            {
                id: 12,
                children: []
            },
            {
                id: 123,
                children: [
                    {
                        id: 3,
                        children: [
                            {}
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        children: []
    },
    {
        id: 2,
    }
]

// https://blog.csdn.net/jarisMA/article/details/112677467

// function searchDeep(arr) {
//     // 循环+判断每个值类型
//     let deep = 1;
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i] || isNormal(arr[i])) {
//             break;
//         }
//         // 如果该值为对象
//         computedDeep(arr[i], deep);
//     }

//     return deep;
// }

// function computedDeep(value, deep) {
//     // 如果该值为对象
//     if (objectType(value) === 'object') {
//         for (let key in value) {
//             if (Array.isArray(value[key])) {
//                 deep++;
//                 computedDeep(value[key], deep);
//             }
//         }
//     }
// }

function searchDeep(arr, d) {
    if (Array.isArray(arr)) {
        // 计算深度
        d++;
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (item.children) {
                if (Array.isArray(item.children)) {
                    searchDeep(item.children, d);
                }
            } else {
                break;
            }
        }
    } else {
        return 0;
    }
    return d;
}


const l = searchDeep(arr, 0);
console.log(l);
