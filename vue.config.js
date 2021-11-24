

const path = require("path");

module.exports = {
    pages: {
        index: {
            // 项目入口文件
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html",
        }
    },
    devServer: {
        // 端口号，如果端口被占用会自动加1
        port: 8086,
        // 主机地址
        host: "localhost",
        // 协议
        https: false,
        // 项目启动自动打开浏览器
        open: true,
    },
    // 关闭格式检查
    lintOnSave: false,
    // 打包时不生成.map文件，加快打包速度
    productionSourceMap: false,

    // 扩展webpack配置，让packages加入编译
    chainWebpack: (config) => {
        config.module
            .rule("js")
            .include.add(path.resolve(__dirname, "packages"))
            .end()
            .use("babel")
            .loader("babel-loader")
            .tap((options) => {
                //修改它的选项
                return options;
            })
    },

};