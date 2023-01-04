/**
 * 参考文档：https://juejin.cn/post/6844903625769091079
 */
/**
 * 手写Promise:
 * 
 * 1.定义三个状态，明白状态之间的转换。
 * pending（等待态）为初始态，并可以转化为fulfilled（成功态）和rejected（失败态）。
 * 成功或失败时不能转换成其他状态，且必须有返回值，该返回值也是一个promise。
 */
const PENDING = 'pending';
const RESOLVED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise(executorFn) {
    let self = this;    // 为什么要这样做？
    console.log('my promise this', this);

    // 初始化状态
    this.state = PENDING;
    // 保存执行结果，一个成功的值，一个失败的值
    this.result = null;
    this.err = null;
    // 两个数组，分别存放 在调用then时，产生的成功或失败的结果，  一旦reject或resolve，就调用他们
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    // 执行器接受的函数
    const resolve = (result) => {
        // 判断传入的值是否为promise，如果是就等待前一个promise改变完状态后再改变状态
        if(result instanceof MyPromise) {
            return result.then(resolve, reject);
        }

        // 保证代码的执行顺序为本轮时间循环的末尾，且只有状态为pending时才可以转变状态
        setTimeout(() => {
            if (self.state === PENDING) {
                self.state = RESOLVED;
                self.result = result;
                // 一旦resolve执行，就调用成功数组
                self.onResolvedCallbacks.forEach(callback => callback(result));    // 为什么不用其他的循环函数？
            }
        }, 0)
    }

    const reject = (err) => {
        // 为什么这里不需要判断是否为promise类型？
        setTimeout(() => {
            if (self.state === PENDING) {
                self.state = REJECTED;
                self.err = err;
                // 一旦reject执行，就调用失败数组
                self.onRejectedCallbacks.forEach(callback => callback(err));
            }
        })
    }

    // 执行执行器函数，如果执行器报错则直接执行reject
    try {
        executorFn(resolve, reject);
    } catch(e) {
        reject(e);
    }
}

/**
 * 2.手写Promise.then（解决链式调用问题）: 各种条件如下：
 * then 返回一个新的promise实例，在该新的promise状态变化时，再执行then里面的函数；
 * 如何保证后一个then里的方法在前一个then结束后再执行呢？
 */

// 01
MyPromise.prototype.then = function(resolve, reject) {
    // 先判断是不是函数类型， 且这两个函数为可选的
    const onResolved = typeof resolve === 'function' ? resolve : function(value) { return value; };
    const onRejected = typeof reject === 'function'? reject : function(error) { throw error };

    // 如果是等待状态，则将函数加入数组中
    if (this.state === PENDING) {
        this.onResolvedCallbacks.push(onResolved);
        this.onRejectedCallbacks.push(onRejected);
    }
    // 如果状态已经改变，则执行对应的回调函数
    if (this.state === RESOLVED) {
        onResolved(this.result);
    }
    if (this.state === REJECTED) {
        onRejected(this.err);
    }
}
// 02
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const self = this; // 保存前一个promise的then
    const promise2 = new MyPromise((resolve, reject) => {
        if (self.state === PENDING) {
            // 将执行结果放在callback函数中
            self.onResolvedCallbacks.push(() => {
                let x = onFulfilled(self.result);
                resolvePromise(promise2, x, resolve, reject);
            });
            self.onRejectedCallbacks.push(() => {
                let x = onRejected(self.err);
                resolvePromise(promise2, x, resolve, reject);
            });
        }
        if (self.state === RESOLVED) {
            let x = onFulfilled(self.result);
            resolvePromise(promise2, x, resolve, reject);
        }
        if (self.state === REJECTED) {
            let x = onRejected(self.err);
            resolvePromise(promise2, x, resolve, reject);
        }
    });
    // 返回promise，完成链式
    return promise2;
}
function resolvePromise(promiseNext, x, resolve, reject) {
    // 判断第一个then返回的值x类型
    if (x === promiseNext) {
        // 循环引用报错
        return reject(new TypeError('Chainning cycle detected for promise'));
    }
    let called = null; // 防止多次调用
    // 当x不是null,且x为对象或者函数的时候
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            // A+规定， 声明then=x.then
            let then = x.then;
            if (typeof then === 'function') {
                // 此时让then执行，使用call, 第一个参数是this指向，后面是成功的回调和失败的回调
                then.call(x, (y) => {
                    if (called) return;
                    called = true;
                    resolvePromise(promiseNext, y, resolve, reject);
                }, (error) => {
                    if (called) return;
                    called = true;
                    reject(error);
                });
            } else {
                // 如果是普通值，则直接执行resolve即可
                resolve(x);
            }
        } catch(error) {
            reject(error);
        }

    } else {
        resolve(x);
    }

}



/**
 * 手写Promise.all（处理并发请求）：核心思路如下：
 * 1.接受一个promise数组，或者具有 iterator 接口的对象作为参数。
 * 2.返回一个新的promise对象，且需要一个数组存放每个promise的执行结果，数组值与参数数组顺序一致。
 * 3.遍历传入的数组，使用Promise.resolve()将参数包裹一层，使其变成一个promise对象。--->这样可以忽略判断普通值。
 * 4.数组中所有的promise执行成功才是成功。
 * 5.数组中只有要一个失败，则触发失败状态，将第一个触发失败的promise错误信息作为promise.all的错误信息抛出。
 */
function promiseAll(promiseArr) {
    let resArr = [];
    let resolvedCounter = 0;
    return new Promise((resolve, reject) => {
        // 容错判断
        if(!Array.isArray(promiseArr)) {
            throw new TypeError('参数必须是一个数组才可以！！')
        }
        for(let i = 0; i < promiseArr.length; i++) {
            Promise.resolve(promiseArr[i]).then((res) => {
                resolvedCounter++;
                resArr[i] = res;   // 因为要保证和原数组的顺序一致，所以最好用下标进行赋值。
                if (resolvedCounter === promiseArr.length) {
                    return resolve(resArr)
                }
            }, (err)=> {
                return reject(err);
            });
        }
    });
}

/**
 * 手写Promise.race():核心思路如下:
 * 1.接受一个promise数组，或者一个可迭代对象
 * 2.返回值是一个promise.
 * 3.只要给定的数组中，有人一个promise状态改变，就使用该promise的执行结果作为返回值。
 */
function promiseRace(promiseArr) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseArr.length; i++) {
            promiseArr[i].then(resolve, reject);
        }
    })
}

