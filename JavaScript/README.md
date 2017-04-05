## JavaScript总览
> 这门语言确实太吸引我,所以将一些碎知识整理归类,作为长期贴提升自己. fighting

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

*[工程化](#workflow)





_____________________________________





<a id="arithmetic"></a>
## 算法
    数组排序
    冒泡
    闭包原理
    数组查重
    排他思想
    跳楼想法

<a id="variable"></a>
## 变量和数据类型
- 变量提升
```
    var num = 10;
    functioon  fn(){
        console.log(num)  //  第一次输出undefined
        var num = 20;
        console.log(num)  //  变量提升是将声明提前,执行函数体内的优先
    }
    fn();  //
```
- 数据类型
    - 数字:number() 强制进行数学运算  parseint  parsefloat
    - 布尔:boolean()  转化 true  和false  用于判断真假
    - 字符串:tostring()
    - json.parse    解析字符串 ```var str = '{"name":"huangxiaojian","age":"23"}'  JSON.parse(str) ``` 单引号写在{}外，每个属性名都必须用双引号，否则会抛出异常
    - json.stringify   字符串json化 stringify()用于从一个对象解析出字符串 ```var  a = {a:1,b:2}   JSON.stringify(a)   "{"a":1,"b":2}" ```
- 判断数据类型
    - typeof instanceof constructor  
    - function solution 
     ``` 
     function isArrayFn(obj){  //封装一个函数
          if (typeof Array.isArray === "function") { 
          return Array.isArray(obj); //浏览器支持则使用isArray()方法
          }else{                     //否则使用toString方法
          return Object.prototype.toString.call(obj) === "[object Array]"; 
          } 
          } 
          alert(isArrayFn(arr));
      ```
    

<a id="operation"></a>
## 运算符
    三元运算符  ||  && !

<a id="expression"></a>
## 表达式
    ```
      var fn = function(){};  // 变量声明形式
      function fn(){};  //函数定义形式
      var func = new Fn(); // 构造函数实例化
    ```

<a id="statement"></a>
## 语句
    暂未添加

<a id="array"></a>
## 数组
    数组排序: 
        arr.sort() //数组默认按升序排列
        arr.reverse() //翻转数组
    原生:
    ```
        var arr = [3,4,7,1,7,3,8,4,2,1]
        
        console.log(arr)
    ```

<a id="dom"></a>
## DOM
    节点操作  parentNode children
    属性操作  setAttrbule/getAttribute
    jquery的增删改查  attr("data-name","xiaohong") /$("input[type='checkbox']").prop("checked",true)

    原生获取元素需要document.getElementById/querySelector/querySelectorAll
<code>document.getElementById("contentBox").getAttribute("value")</code>
    jquery只需要$选择器即可实现
<code>$("#contentBox").val()</code>

<a id="bom"></a>
## BOM
- history  //历史记录
    - go(-1)
    - back()
- window  //系统属性(alert())
- location //地址栏
    - `hash`	//设置或返回从井号 (#) 开始的 URL（锚）。
    - `host`	//设置或返回主机名和当前 URL 的端口号。
    - `hostname`	//设置或返回当前 URL 的主机名。
    - `href`	//设置或返回完整的 URL。
    - `pathname`	//设置或返回当前 URL 的路径部分。
    - `port`	//设置或返回当前 URL 的端口号。
    - `protocol`	//设置或返回当前 URL 的协议。
    - `search`	//设置或返回从问号 (?) 开始的 URL（查询部分）。
    
- screen  //屏幕
- navigator //有关浏览器的信息
    - `appCodeName`	//返回浏览器的代码名。
    - `appName`	//返回浏览器的名称。
    - `platform`	//返回运行浏览器的操作系统平台。
    - `browserLanguage`	//返回当前浏览器的语言。
    - `userAgent`	//返回由客户机发送服务器的 user-agent 头部的值。
    - `appVersion`	//返回浏览器的平台和版本信息。
    - appMinorVersion 	//返回浏览器的次级版本。
    - cookieEnabled 	//返回指明浏览器中是否启用 cookie 的布尔值。
    - cpuClass 	//返回浏览器系统的 CPU 等级。
    - onLine 	//返回指明系统是否处于脱机模式的布尔值。
    - systemLanguage 	//返回 OS 使用的默认语言。
    - userLanguage 	//返回 OS 的自然语言设置。


<a id="timer"></a>
## 定时器
    var timer = setTimeout()
    var timer = setinterval()
    clear timer()

<a id="method"></a>
## 属性/方法/变量
    

<a id="event"></a>
## 事件
    事件三要素 事件源 事件 
    addEventListener()
    removeEventListener() 

``` 
document.getElementById("myBtn").addEventListener("click", myFunction);
   function myFunction() {
       document.getElementById("demo").innerHTML = "Hello World";
   }
```

<a id="function"></a>
## 函数

<a id="face-obj"></a>
## 面向对象
    暂未添加

<a id="inner-obj"></a>
## 内置对象
    暂未添加

<a id="ajax"></a>
## ajax
json    
```
$.ajax({
           type:"POST",
           url:"./request/addMenu",
           dataType:"json",
           contentType:"application/json",
           data:JSON.stringify(param),
           success:function(v){
               setTimeout(function(){
                   // history.go(0)
                   window.location.href ="index.html";
               },1200)
           },
           error:function(v){
           }
       });
   ```
jsonp 
```
$.ajax({
        type:"POST",
        url:"www.baidu.com/tianqi/today",
        dataType: "jsonp",
        jsonp: 'callbackparam',
        contentType: "application/json; charset=utf-8",
        data:{age:22},
        success:function(v){
            setTimeout(function(){
                // history.go(0)
                window.location.href ="index.html";
            },1200)
        },
        error:function(v){
        }
    }); 
```
fetch [参考资料](http://www.html5online.com.cn/articles/2015051301.html) 
```
    fetch("/students.json")
    .then(
        function(response){
            console.log(response.headers.get('Content-Type'));
            console.log(response.headers.get('Date'));
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.type);
            console.log(response.url);
        }
    )
```
<a id="closebag"></a>
## 闭包
    创建一个独立的作用域 函数和变量声明只能在这个独立作用域中使用和调用


<a id="turnround"></a>
## 回调
    callback  事件结束后触发某任务
    循环调用:自己调用自己
    

<a id="designpattern"></a>
## 设计模式
- 单例模式
- 命令模式
- 模块模式
- 工厂模式
- 构造函数模式
- 原型模式
- 组合模式
- 装饰者模式
- 观察者模式
- 订阅发布模式
- Promise/A模式


<a id="workflow"></a>
## 工程化
    gulp
    grunt
    webpack
    cooking
    yoman

