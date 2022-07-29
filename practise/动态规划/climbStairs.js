/**
 * 爬楼梯
 */

function climbStairs01(n) {
  let res=[];
  res[0] = 1;
  res[1] = 1;
    // 走到第n阶，有两种走法，一种是从第 n-1 阶走一步，第二种是从n-2阶走 一步 或者两步到达。
    for (let i = 2; i <= n; i++) {
      res[i] = res[i-1]+res[i-2];
    }
  return res[n];
}



function climbStairs02(n) {
  if (n===1) {
    return 1;
  } else if (n===2) {
    return 2;
  } else {
    return climbStairs02(n-1) + climbStairs02(n-2);   // 使用递归会超时。n最大值为45
  }
}

const res = climbStairs02(3);

console.log(res);