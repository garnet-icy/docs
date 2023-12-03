/**
 * @param {number[]} nums
 * @return {number}
 */
let numArr = [3,2,3]
var majorityElement = function (nums) {
  let showMaxNum = nums[0]
  let maxFre = 1
  let pm = new Map()
  nums.forEach((item,i) => {
    if(pm.has(item)){
      let nowFre = pm.get(item)
      pm.set(item,++nowFre)
      if(nowFre>maxFre){
        maxFre = nowFre
        showMaxNum = nums[i]
      }
    }else{
      pm.set(item,1)
    }
  });
  return showMaxNum
};

console.log(majorityElement(numArr))