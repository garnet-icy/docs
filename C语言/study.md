# 白纸编程
## 赋值与打印
```c
// 声明与打印整型（布尔值也用%d）
int a = 100
printf("%d\n",a)
// 声明字符串
char b = "asd"
printf("%c\n",b)
// 声明小数
float c = 2.333
printf("%f\n",c)
// 声明三位小数的浮点数
float c = 2.333
printf("%.3f\n",c)
```

## 头文件引入
```c
// 基础头文件
#include <stdio.h>
// 布尔值头文件
#include <stdbool.h>
```

## 函数
```c
// 定义函数
// int: 返回int值
// void: 没有返回值
// float: 返回浮点数
int TestFun(int b,int,c){
  return b+c
}
```
**1. 函数名称建议大写**