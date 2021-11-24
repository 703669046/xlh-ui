/*
 * @Author: Xie Lianghui
 * @Date: 2021-11-22 09:23:22
 * 
 */

// 引入echart
import * as echarts from "echarts";
// 引入element-ui 
import elementui from "element-ui";
// 引入element-ui样式
import "element-ui/lib/theme-chalk/index.css"




import Button from "./components/Button"

const install = function (Vue) {
    Vue.mixin({
        //把initEchart 配置成vue全局方法，在任何地方都可以使用
        methods: {
            /**
             * 把这个方法封装成一个全局方法 ，通过this.initEchart()调用
             * 用来封装echart的函数
             * ref: 用来放置echart的容器
             * options echart的选项值
             */
            initEchart(ref, options, onclick) {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(ref);
                // 绘制图表
                myChart.setOption(options);

                //设置点击事件
                if (onclick) myChart.on("click", onclick);
            },
        },
    });

    // 将elementui注册到vue中
    Vue.use(elementui);
    // 将echarts注册到vue中
    Vue.use(echarts)



    Vue.component("x-button", Button);
}
//判断是否是直接引入文件，不过是，就不要直接调用Vue.use();
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default install;






