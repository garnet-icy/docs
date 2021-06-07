// 类
class Person{
  public name:string
  constructor(n:string){
    this.name = n
  }
  work(){
    console.log('类---'+this.name+' works')
  }
  static run(){
    console.log("I'm going")
  }
}

var p = new Person('John')
p.work()


// 类的继承
class Web extends Person{
  constructor(n:string){
    super(n) //super函数将参数传递到子类中
  }
}
let w = new Web('Jenny')
w.work()
// 直接调用的静态方法
Web.run()


