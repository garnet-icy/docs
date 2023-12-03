/**
 * @param {number[]} nums
 * @return {number}
 */
// 输出删除重复项目之后的数组长度与数组
// 只能在原数组上改动
/**
 * 方法一：遍历数组，当数组当前值在后面有相同值时，删除当前值，index不自增，确保当前值是数组中唯一一个，继续往后遍历
 * 方法二：遍历数组，记录
 */
// let num = [1,2]
let num = [0,0,1,1,1,2,2,3,3,4]


// 方法一
// var removeDuplicates = function (nums) {
//   let i=0
//   while(nums[i]||nums[i]===0){
//     let index = nums.lastIndexOf(nums[i])
//     if(index>i){
//       nums.splice(i,1)
//     }else{
//       i++
//     }
//   }
//   return nums
// };


// 方法二
var removeDuplicates = function (nums) {
  let i=0
  let k = 0
  while(nums[i]||nums[i]===0){
    if(nums[i+1]!==nums[i]){
      nums.splice(k,i-k)
      k++
      i=k
    }else{
      i++
    }
  }
  return nums
};
console.log(removeDuplicates(num))