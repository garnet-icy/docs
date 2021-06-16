// // 类
// class Person{
//   public name:string
//   constructor(n:string){
//     this.name = n
//   }
//   work(){
//     console.log('类---'+this.name+' works')
//   }
//   static run(){
//     console.log("I'm going")
//   }
// }

// var p = new Person('John')
// p.work()


// // 类的继承
// class Web extends Person{
//   constructor(n:string){
//     super(n) //super函数将参数传递到子类中
//   }
// }
// let w = new Web('Jenny')
// w.work()
// // 直接调用的静态方法
// Web.run()




// class Futher {
//     public age: number;
//     constructor(age: number) {
//         this.age = age
//     }
//     counts(): void {
//         console.log(this.age)
//     }
// }
// class children1 extends Futher {
//     constructor(age: number) {
//         super(age)
//     }
//     counts(): void {    /* 多态，重写方法不执行父类方法 */
//         console.log(this.age - 1)
//     }
// }
// class children2 extends Futher {
//     constructor(age: number) {
//         super(age)
//     }
//     counts(): void {
//         console.log(this.age + 1)
//     }
// }

// let c1 = new children1(12);
// let c2 = new children2(12);

// c1.counts()
// c2.counts()





// interface params  {
//   name:string,
//   age?:number,
// }

// function returnInfo(param:params):void{
//   console.log(param.name+param.age)
// }

// returnInfo({name:'123'})



function getName<T>(value:T):T{
  return value
}

console.log('getName<number>(123): ', getName<number>(123));
console.log('getName<number>(123): ', getName<string>('asd'));