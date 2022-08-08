/**
 * 买卖股票的最佳时机
 */


// 暴力循环
function maxProfit(prices) {
  let maxp = 0;
  for (let i = 0; i < prices.length; i++) {     // 时间复杂度为O(n^2)
    for (let j = i + 1; j < prices.length; j++) {
      maxp = Math.max(maxp, prices[j] - prices[i]);
    }
  }
  return maxp;
}


// 一次循环
function maxProfit02(prices) {
  // prices[i] - minproces 的最大值就是最大的利润
  let minprice = Number.MAX_VALUE;
  let maxp = 0;
  for (let i = 0; i < prices.length; i++) {
    // minprice = Math.min(minprice, prices[i]);
    // maxp = Math.max(maxp, prices[i] - minprice);
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxp) {
      maxp = prices[i] - minprice;
    }
  }

  return maxp;
}