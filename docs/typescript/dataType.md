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