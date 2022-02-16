// filter
let testArr = [
  {
    name: 'sina',
    age: 12,
  },
  {
    name: 'google',
    age: 22,
  }
]

// let newArr = testArr.filter(item=>{
//   // console.log(item);
//   return item.age < 12
// })
// let everyArr = testArr.every(item=>{
//   console.log(item);
//   return item.age <= 12
// })
// let findArr = testArr.find(item=>{
//   return item.age == 12
// })

// let mapArr = testArr.map((item,index,target)=>{
//   console.log(item,index,target);
//   item.age += 12
// })


// console.log(mapArr);


// let arr1 = ["it's Sunny in", "", "California"];

// let arr = arr1.map(x => x.split(" "));
// let arr2 = arr1.flatMap(x => x.split(" "));

/**
 * some
 */
// let newArr = testArr.some(item=>{
//   return
// })
// console.log(arr2);


// console.log(this);

// for(var i=0;i<5;i++){
//   (function(x){
//     setTimeout(function(){
//       console.log(x++);
//     }, 4000);
//   })(i)

// }
// console.log(i);


function test() {
  var a = 1
  return function () {
    console.log(a);
  }
}
// test()()


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newArr = arr.map(n => {
  console.log(n);
  n <= 4 ? [n, n + 1] : []
})
console.log(arr);
console.log(newArr);


for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
}



var a = Object.prototype.toString;
 
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));