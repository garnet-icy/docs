/**
 * @param {string} s
 * @return {number}
 */
let str = "MCMXCIV"
var romanToInt = function (s) {
  let keys = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM', 'I', 'V', 'X', 'L', 'C', 'D', 'M']
  let values = [4, 9, 50, 90, 400, 900, 1, 5, 10, 50, 100, 500, 1000]
  let num = 0
  let i = 0
  if(s.length===1){
    return values[keys.indexOf(s[0])]
  }
  while(s[i]){
    if (keys.indexOf(s[i]+s[i+1]) >= 0) {
      num += values[keys.indexOf(s[i]+s[i+1])]
      i=i+2
    } else {
      num += values[keys.indexOf(s[i])]
      i++
    }
  }
  return num
};
console.log(romanToInt(str))