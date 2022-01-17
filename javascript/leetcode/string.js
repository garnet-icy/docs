/**
 * 1.连续的数字中任意一个或者两个可以组成[0-25]数字时，一串数字有多少种组法（使用动态规划）
 * 理解：定义一个数组类型的变量保存当前遍历的下标前的数可以有多少种组合办法，dp数组第i个指的就是数字前i+1位组成的数字包含的结果数，最后取数组最后一位就是最终结果
 * 边界条件
 *    ①每一个当前数都等于前两位相加，
 *    ②每一个当前数都等于前两位相加，
 *
 */

  function test(num){
    let numStr = num.toString()
    let dp = [1]
    for(var i=1;i<numStr.length;i++){
      // 20-25
      if(numStr[i-1]=='2'&&numStr[i]<'6'){
        dp[i] = dp[i-1]+(i>2?dp[i-2]:1)
      // 10-19
      }else if(numStr[i-1]=='1'){
        dp[i] = dp[i-1]+(i>2?dp[i-2]:1)
      }else {
        // 次数不增加
        dp[i] = dp[i-1]
      }
    }
    return dp[numStr.length-1]
  }

  console.log(test(1221))


/**
* 字符串中连续最大的不重复字符串的数量
*/
function arrTest(s){
  let strArr = []
  let sum = 0
  for(var i=0;i<s.length;i++){
    let index = strArr.indexOf(s[i])
    if(index>=0){
      strArr.splice(0,index+1)
    }
    strArr.push(s[i])
    sum = Math.max(sum,strArr.length)
  }
  return sum
}