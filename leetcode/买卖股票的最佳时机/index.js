/**
 * @param {number[]} prices
 * @return {number}
 */
let nums = [7,0,5,3,8,1,9]

// 方法一
// var maxProfit = function (prices) {
//   let max = 0
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       max = prices[j] - prices[i] > max ? prices[j] - prices[i] : max
//     }
//   }
//   return max > 0 ? max : 0
// };

// 方法二
var maxProfit = function (prices) {
  if (prices.length == 1) {
    return 0
  }
  // 最大利润
  let max = 0
  // 买入的下标
  let minIndex = 0
  for (let i = 1; i < prices.length; i++) {
    // 最大利润小于当前利润，当前利润就是最大利润
    if(prices[i]<prices[minIndex]){
      minIndex = i
    }
    if(max < prices[i]-prices[minIndex]){
      max = prices[i]-prices[minIndex]
    }
  }
  return max
};
console.log(maxProfit(nums))

