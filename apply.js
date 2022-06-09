// https://juejin.cn/post/6844903728147857415

// 浏览器环境 非严格模式
function getGlobalObject() {
  return this;
}

function IsCallable(func) {
  if (typeof func !== 'function') {
    return false;
  }
  return true;
}

Function.prototype.applyFn = function apply(thisArg, argsArray) {
  if (!IsCallable(func)) {
    throw new TypeError(this + 'is not a function')
  }

  if (typeof argsArray === 'undefined' || argsArray === null) {
    argsArray = [];
  }

  if (argsArray !== new Object(argsArray)) {
    throw new TypeError('CreateListFromArrayLike called on non-object')
  }

  if (typeof thisArg === 'undefined' || thisArg === null) {
    thisArg = getGlobalObject();
  }

  // 所有其他的值会被转成Object 并将结果作为this值
  thisArg = new Object(thisArg);
  var __fn = `__${new Date().getTime()}`;   // 为了保证key是唯一的，防止删掉对象上本来就有的key值。如果这样都不能保证key值是唯一的，那就再加一次缓存。
  
  var originalval = thisArg[__fn];
  var hasOriginalVal = thisArg.hasOwnProperty(__fn);

  thisArg[__fn] = this;
  // 9.提供 thisArg 作为 this 值并以 argList 作为参数列表，调用 func 的 [[Call]] 内部方法，返回结果
  var result = thisArg[__fn](...argsArray);
  delete thisArg[__fn];

  if (hasOriginalVal) {
    thisArg[__fn] = originalval;
  }

  return result;
}

// 利用apply实现call
Function.prototype.callFn = function call(thisArg) {
  var argsArray = [];
  var argumentsLength = arguments.length;    // 为什么用argument?
  for (var i = 0; i < argumentsLength; i++) {
    // argsArray.push(arguments[i + 1]);  // 事实上push方法，内部也有一层循环。所以理论上不使用push性能会更好些。面试官也可能根据这点来问时间复杂度和空间复杂度的问题。
    argsArray[i] = arguments[i+1];
  }
  console.log('argsArray', argsArray);
  return this.applyFn(thisArg, argsArray);
}

