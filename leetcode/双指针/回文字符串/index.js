/**
 * @param {string} s
 * @return {boolean}
 */
// let str = "A man, a plan, a canal: Panama"
let str = "A man, a plan, a canal: Panama"
var isPalindrome = function (s) {
  // 去掉所有的其余字符只保留数字字母，并将字母转为小写
  s = s.replace(/[^a-zA-Z0-9]/g,"").replace(/\s/g,"").toLowerCase();
  let left = 0
  let right = s.length-1
  while(right>=left){
    if(s[right]===s[left]){
      right--
      left++
    }else{
      return false
    }
  }
  return true
};

console.log(isPalindrome(str))