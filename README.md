# 🐝 calculation
自己封装的一个简单四则运算的 `javascript` 库，会精确到浮点类型，可用于常见的**金融领域的简单运算**

## 🎒 calculation-js 用法

1. 浏览器用法：
<br>
下载到本地之后，直接使用 `script` 标签进行引入；

 `<script src="../calculation-js.js"></script>`

<br>

```html

<script>
        // 整数
        console.info('整数');
        console.log(calculate.add(3,4))
        console.log(calculate.sub(3,4))
        console.log(calculate.mult(3,4))
        console.log(calculate.divi(3,4))
</script>

```

2. 引入到 `js文件中`
<br>

 `var calc = require('calculate');`

```js
    calc.add(num,num);    //加法算法
    calc.sub(num,num);    //减法算法
    calc.mult(num,num);   //乘法算法
    calc.divi(num,num);   //除法算法
``` 



## ↗️ 版本变迁
- v1.0.0 
    + 初级版本，只精确到整型;
    + 只能使用在浏览器，不能用在服务端；

- v1.0.1
    + 只精确到整型；
    + 兼容 `AMD CMD CommonJs 原生浏览器`；
    + 增加 `mocha` 单元测试；

