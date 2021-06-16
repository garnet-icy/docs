# typescript数据类型
> enum(一个名称集合，限制数据值只能在集合中找到)
1. 使用方法

    ```ts
      enum ShirTSize {
        XS,
        S,
        M,
        L,
        XL
      }

      function assertNever(value: never): never {
        console.log(Error(`Unexpected value '${value}'`));
      }

      function prettyPrint(size: ShirTSize) {
        switch (size) {
            case ShirTSize.S: console.log("small");
            case ShirTSize.M: return "medium";
            case ShirTSize.L: return "large";
            case ShirTSize.XL: return "extra large";
            case ShirTSize.XS: return "extra small";
            default: return assertNever(size);
        }
      }

      prettyPrint()
    ```
2. 枚举的双向映射

    ```ts
    // 字符串枚举不能做双向映射
    enum days {
      a,
      b,
      c ='string'
    }
    console.log(days)
    // { 0:a,1:b,a:0,b:1,c:'string' }
    ```

3. 常量枚举
    ```ts
    // 枚举前加const为常量枚举，不需要对象而需要对象的值
    // 常量枚举会在编译阶段被移除
    const enum colors{
      red,
      green
    }
    console.log(colors)  // ReferenceError: colors is not defined
    console.log(colors.red)  // 0
    ```

4. 枚举值编译后源码
    ```js
      var color;
      (function(color){
        color[color['red'] = 0] = 'red'
        color[color['yellow'] = 0] = 'yellow'
        color[color['green'] = 0] = 'green'
      })(color||(color={}))
    ```

> Tuple
```js
let arr:[boolean,string,numer] = [false,'asd',123]
```



> void 与 function
```ts
  function run():void{
    // 无返回值
  }


  function run():string{
    return 'run'
  }

  function returnString(name:string,age:number):string{}

  function returnString(name:string,age:number):void{}


  // 可选参数
  function returnString(name:string,age?:number):void{}

  // 默认参数
  function returnString(name:string,age?:number=20):void{}


  // 扩充参数
  function returnString(...names:Array):string{
    let str = ''
    return names.forEach(item=>{
      str+=item
    })
  }
  returnString(['a','b','c'])


  // 函数重载 (根据参数的不同掉用内容不同但名字相同的方法,在强类型语言中会用到，javascript中不会判断参数类型，typescript会)

  // 相比只有最后一个函数时，增加了输入与输出必须类型相同的限制
  function reverse(x: number): number;
  function reverse(x: string): string;
  function reverse(x: number | string): number | string {
      if (typeof x === 'number') {
          return Number(x.toString().split('').reverse().join(''));
      } else if (typeof x === 'string') {
          return x.split('').reverse().join('');
      }
  }

```

> 箭头函数

    函数中this会是编译为ES5之后的this，含有上下文



> 类
```ts
class Person{
  name:string
  constructor(n:string){
    this.name = n
  }
  work():string{
    console.log(this.name+'works')
  }
}

var p = new Person('John')
p.work()
```

**类的继承**
```ts
class Person{
  name:string
  constructor(n:string){
    this.name = n
  }
  work():string{
    console.log(this.name+'works')
  }
}

var p = new Person('John')
p.work()



class Web extends Person{
  constructor(n:string){
    super(n)
  }
}
```

**类的修饰符**
```ts
// 属性
// public;   类外部可以访问
// protected;  类与子类内可以访问
// private;  只在类内部使用
// static  静态属性


//方法
// static  静态方法（直接类名调用）

// 只是编译会报错，并不影响代码执行，更多是为了规范代码
```


**多态**

```父类中定义方法，子类中定义同名方法进行不同的实现```





> 接口 对json对象的约束


```普通接口```
```ts

  // 对一个方法进行约束
  // 可使用‘?’修饰参数为非必需
  interface params = {
    name:string,
    age?:number,
  }

  function returnInfo(param:params):void{
    console.log(param.name+param.age)
  }

```

```函数接口```


```ts
  interface encrypt {
    (key:string,value:string):string
  }

  const md5:encrypt = function(key:string,value:string){
    return someFunction(key,value)
  }
```



```数组与对象的约束```

```ts
  // 数组的约束
  interface userArr {
    [index:number]:string
  }

  // 对对象的约束
  interface userObj {
    [index:string]:string
  }


  // 对类的约束
  interface userClass {
    name:string

    eat(str:string):void
  }

    // user1的类实现此接口
    class user1 implements userClass{
      name:string
      constractor(name:string){
        this.name = name
      }
      eat(str:string){
        console.log(this.name +'---'+ str)
      }
    }



  // 对类的扩展，可以用接口类继承接口类
  interface userClass {
    name:string

    eat(str:string):void
  }

  interface nameClass extends userClass {
    work(str:string):void

  }

  // 单纯的接口实现
  class Person implements nameClass{
    // 必须有name属性，并且有eat与work方法
  }

  // 有继承也有实现
  class Person extends userClass implements nameCalss{
    constractor (name:string){
      // 对于继承的父类中的属性必须使用super函数
      super (name)
    }

    eat(){}
    work(){}
  }
```


> 泛型

```泛型函数```
```ts
function getName<T>(value:T):T{
  return value
}

console.log('getName<number>(123): ', getName<number>(123));
console.log('getName<number>(123): ', getName<string>('asd'));
```

```泛型类```
```ts
class Test<T>{
  constractor(name:T) {
    this.name = name
  }

  work<T>(value:T){
    return value
  }
}
```