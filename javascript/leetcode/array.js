/**
 * 1.数组中两数最大差值，
 */

// 预先定义最小值和最大利润
var maxProfit = function (prices) {
  // 最低价格
  let minPri = prices[0]
  let maxMoney = 0
  for (var i of prices) {
    minPri = Math.min(minPri, i)
    maxMoney = Math.max(maxMoney, i - minPri)
  }
  return maxMoney
};



/**
 * 1.在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 */

// 拆分为子任务，从左上开始遍历，每一个元素都是之前上边和左边的较大值的和
var maxValue = function(grid) {
  const lenRow = grid.length;
   const lenCol = grid[0].length;

   for(let i=lenRow-1; i>=0; i--) {
       for(let j=lenCol-1; j>=0; j--) {
           if(i===lenRow-1 && j===lenCol-1){ //当i===lenRow-1 && j===lenCol-1 我们跳过  等于他自身
               continue;
           }else if(i===lenRow-1){ //当i===lenRow-1 时 grid[i][j] += grid[i][j+1]; 他自己就是最下方所以只能加右边的值
               grid[i][j] += grid[i][j+1];
           }else if(j===lenCol-1){ //当j===lenCol-1 时 grid[i][j] += grid[i+1][j]; 他自己就是最右方所以只能加下边的值
               grid[i][j] += grid[i+1][j];
           }else{ //否则 grid[i][j] += Math.max(grid[i+1][j],grid[i][j+1]);  选择加 (下边和右边中最大值)
               grid[i][j] += Math.max(grid[i+1][j],grid[i][j+1]);
           }

       }
   }
   return grid[0][0]

};



/**
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 * 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
  var maxSubArray = function (nums) {
    let max = 0,sum = nums[0]
    for (i of nums){
      max = Math.max(i,max+i)
      sum = Math.max(sum,max)
    }
    return sum
  };


/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
 * 也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。
 * 请问该机器人能够到达多少个格子？
 */
 var movingCount = function(m, n, k) {
  if(k===0){
      return 1
  }
  let grid = []
  let item = []
  for(var i=0;i<m;i++){
      item = []
    for(var j=0;j<n;j++){
      item.push('1')
    }
    grid.push(item)
  }
  // 求当前格之和为多少
  function sunNumber(a,b){
    let num = (a+''+b).split('')
    let sum = num.reduce((a,b)=>parseInt(a)+parseInt(b))
    return sum
  }

  // 回溯算法，较为复杂的递归
  function find(i,j){

      if(sunNumber(i,j)>k||i>=m||j>=n||grid[i][j]==='0') {
        return 0
      }else{
        grid[i][j] = '0'
        return 1+find(i+1,j)+find(i,j+1)
      }

  }
  return find(0,0)
};

