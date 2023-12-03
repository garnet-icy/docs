# 白纸编程
## python逻辑判断
```python
# 与
True and True
# 或
True or False
# 非
not True
```

## 函数
### 定义
```python
# 基本定义
def testFun(a,b):
  return a+b

# 默认参数，没有参数时返回20
def testFun(a=10,b=20):
  return a+b

# 不定数量参数
def testFun(*param):
  sum_number = 0
  for counter in param:
    sum_number = sum_number + counter
  return sum_number

testFun(1,2,3,4)
```
**1.同时使用时，必选参数在最前面，默认参数在后，不定长参数最后**
