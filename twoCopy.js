// 判断对象
function isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]'
}

function isObject2(obj) {
  // 考虑null的情况,因为 typeof null === 'object'
  return typeof obj === 'object' && obj !== null;
}

/**
 * 深拷贝
 */
// 浅拷贝+递归, 递归方法最大的问题在于爆栈，当数据的层次很深是就会栈溢出
function clone1(source) {
  if (!isObject2(source)) {
    return source;
  }
  // 兼容数组的情况
  let target = Array.isArray(source) ? [] : {};
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (isObject2(source[key])) {
        target[key] = clone1(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;

}
// 利用JSON
function clone2(source) {
  return JSON.parse(JSON.stringify(source) || {});
}


 // 解决循环引用问题

 // 1.利用哈希表：解决循环引用和引用丢失的问题
 // 设置一个数组或者哈希表存储已拷贝过的对象，当检测到当前对象已存在于哈希表中时，取出该值并返回即可。
 function clone3(source, hash = new WeakMap()) {
  if (!isObject2(source)) {
    return source;
  }
  if (hash.has(source)) {
    return hash.get(source);
  }

  // 兼容数组的情况
  let target = Array.isArray(source) ? [] : {};
  hash.set(source, terget)

  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (isObject2(source[key])) {
        target[key] = clone3(source[key], hash);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;

}

// 2.利用数组
function find(uniqueList,source) {
  for(let i = 0; i < uniqueList.length; i++) {
    if (uniqueList[i].source === source) {
      return uniqueList[i];
    }
  }
  return null;
}
function clone4(source, uniqueList = []) {
  if (!isObject2(source)) {
    return source;
  }

  // 兼容数组的情况
  let target = Array.isArray(source) ? [] : {};
  let finfData = find(uniqueList, source)
  if (finfData) {
    return finfData.target;
  } else {
    uniqueList.push({
      source,
      target,
    })
  }


  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (isObject2(source[key])) {
        target[key] = clone4(source[key], uniqueList);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;

}


