// 引入 cooking 依赖
var cooking = require('cooking');

// 调用 set 方法传入自定义配置
cooking.set({
    entry: './src/index.js', // 指定入口文件
    dist: './dist', // 设置打包后的文件目录
    hash: true, // 打包的文件是否带 hash
    sourceMap: false, // 是否带 sourceMap
    template: './index.html', // 加载 index.html 模板
    devServer: { // 开启 webpack-dev-server
        port: 8888, // 端口为 8888
        publicPath: '/' // 开启 dev-server 时默认打包的资源文件路径是和 index.html 同级的
    },
    extends: ['vue2'] // 加载 cooking-vue2，自动配置 Vue 2.0 相关内容
});

// 生成 webpack 配置并导出
module.exports = cooking.resolve();