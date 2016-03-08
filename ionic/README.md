###Ionic教程解析

*需要配置环境变量的:*

Java: http://jingyan.baidu.com/article/f96699bb8b38e0894e3c1bef.html

ADT: http://www.androiddevtools.cn/

Android: http://jingyan.baidu.com/article/22a299b51c59d69e19376af8.html

GIT: http://jingyan.baidu.com/article/9f7e7ec0b17cac6f2815548d.html

*需要下载和安装的:*

Node.js : https://nodejs.org/en/ 

C++: http://bbs.vc52.cn/thread-630630-1-1.html

安装好node(控制台输入:node –v 出版本号表示成功)在控制台输入:
```
npm  install   -g    cordova
npm  install   -g    ionic
```
–g指的是全局(默认目录在c:
/用户/node的安装路径 / node_modules中),安装好之后在cmd控制台输入:  ionic -v(cordova同理)出版本号代表成功  
*至此项目环境配置完成*,可以愉快的使用命令行生成app了

*指令为:* 

```
Ionic    start    myApp    blank
Ionic    start    myApp     tabs
Ionic    start    myApp    sidemenu
```

上面三个模板任选一个(blank为空模板)模板生成位置为cmd控制台当前路径,所以提前cd切换到项目文件夹再生成指令
```
ionic   platform  add   android  添加项目平台(我在这卡了三天,报错直接复制到google)
```

```
ionic    build    android  打包生成
```


*学习切入点,我提供关键词,你需要搜的:*

    Node.js基本命令行操作 
    Node docs文档(上官网)
    Npmjs.com(需要翻墙) 命令:npm install jquery(通过命令行安装一下jquery你应该熟悉)
    Ionic docs文档(上官网)
    Ng-cordova(上官网 这货是angular+cordova的合体,有很多常用移动端组件)
    Git 命令(学会这个 如果你逛github这个不是问题)


最后可以看一下我的mind图,有图解.:blush:
https://github.com/sunlanda/mindpic 




