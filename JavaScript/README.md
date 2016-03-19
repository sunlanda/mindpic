##JavaScript总览
    这门语言确实太吸引我,所以将一些碎知识整理归类,作为长期贴提升自己. fighting

*[算法](#user-content-arithmetic)
    
*[变量和数据类型](#user-content-variable)

*[运算符](#user-content-operation)

*[表达式](#user-content-expression)

*[语句](#user-content-statement)

*[数组](#user-content-array)

*[DOM](#user-content-dom)

*[BOM](#user-content-bom)

*[定时器](#user-content-timer) 

*[属性/方法/变量](#user-content-method)

*[事件](#user-content-event)

*[函数](#user-content-function)

*[面向对象](#user-content-face-obj)

*[内置对象](#user-content-inner-obj)

*[Ajax](#user-content-ajax)  

*[闭包](#user-content-closebag)

*[回调](#user-content-turnround)

*[设计模式](#user-content-designpattern)





_____________________________________





<a id="arithmetic"></a>
##算法
    数组排序
    冒泡
    闭包原理
    数组查重
    排他思想
    跳楼想法

<a id="variable"></a>
##变量和数据类型
    变量提升
    ```
        var num = 10;
        functioon  fn(){
            console.log(num)  //  第一次输出undefined
            var num = 20;
            console.log(num)  //  变量提升是将声明提前,执行函数体内的优先
        }
        fn();  //
    ```
    数据类型
      数字:number()   强制进行数学运算  parseint  parsefloat
      布尔:boolean()  转化 true  和false  用于判断真假
      字符串:  tostring()
      json.parse    解析字符串
          var str = '{"name":"huangxiaojian","age":"23"}'  JSON.parse(str)
          单引号写在{}外，每个属性名都必须用双引号，否则会抛出异常
      json.stringify   字符串json化
          stringify()用于从一个对象解析出字符串
          var  a = {a:1,b:2}   JSON.stringify(a)   "{"a":1,"b":2}"

<a id="operation"></a>
##运算符
    三元运算符  ||  && !

<a id="expression"></a>
##表达式
    ```
      var fn = function(){};  // 变量声明形式
      function fn(){};  //函数定义形式
      var func = new Fn(); // 构造函数实例化
    ```

<a id="statement"></a>
##语句
    暂未添加

<a id="array"></a>
##数组
    数组排序: 
        arr.sort() //数组默认按升序排列
        arr.reverse() //翻转数组
    原生:
    ```
        var arr = [3,4,7,1,7,3,8,4,2,1]
        
        console.log(arr)
    ```

<a id="dom"></a>
##DOM
    节点操作    
    属性操作  setAttrbule
    增删改查

<a id="bom"></a>
##BOM
    history 历史记录
    window  系统属性(alert())
    document 文档加载
    location 地址栏
    screen  屏幕
    navigator 


<a id="timer"></a>
##定时器
    var timer = setTimeout()
    var timer = setinterval()
    clear timer()

<a id="method"></a>
##属性/方法/变量
    暂未添加

<a id="event"></a>
##事件
    时间三要素 事件源 事件 

<a id="function"></a>
##函数
    暂未添加

<a id="face-obj"></a>
##面向对象
    暂未添加

<a id="inner-obj"></a>
##内置对象
    暂未添加

<a id="ajax"></a>
##ajax
```

```
<a id="closebag"></a>
##闭包
    创建一个独立的作用域 函数和变量声明只能在这个独立作用域中使用和调用


<a id="turnround"></a>
##回调
    callback
    自己调用自己
    ```
    
    ```

<a id="designpattern"></a>
##设计模式
    单例模式
    命令模式
    模块模式
    工厂模式
    构造函数模式
    原型模式
    组合模式
    观察者模式
    订阅发布模式
Promise/A模式




    ```
    
    ```

