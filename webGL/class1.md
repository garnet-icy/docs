## <center> webGL </center>
### 字典
1. mat4:4x4矩阵
2. vec4:4x1矩阵
### 矩形
1. 定义canvas画布，设置宽高
2. 顶点着色器源码与片元着色器源码
```js
  // 放置于script标签中，type="x-shader/x-vertex"
  void main() {
    //给内置变量gl_PointSize赋值像素大小
    gl_PointSize=20.0;
    //顶点位置，位于坐标原点
    gl_Position =vec4(0.0,0.0,0.0,1.0);
  }

  // 片元着色器源码
  // 放置于script标签中，type="x-shader/x-fragment"
  void main() {
    gl_FragColor=20.0;
  }
```
3. 初始化着色器
  > 编写initShder函数（shader.js）,三个参数
  ```js
    // webgl实例
    1. canvas.getContext('webgl')
    2. 通过getElementById().innerText方法获取顶点着色器源码vertexShaderSource
    3. 通过getElementById().innerText获取片元着色器源码fragShaderSource
  ```

4. 平移变换的方式
```js
  方法为修改三个顶点x轴数值
  1. 直接改变data数组中的坐标值
  2. for循环改变data值
  3. 修改顶点着色器源码
      void main() {
        gl_Position =vec4(apos.x-0.4,apos.y,apos.z,1);
      }
```