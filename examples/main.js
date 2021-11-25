import Vue from 'vue'
import App from './App.vue'

import 'github-markdown-css'
// 引入element-ui 
import elementui from "element-ui";
// 引入element-ui样式
import "element-ui/lib/theme-chalk/index.css"

import $ from "jquery";
import './components/docuMarkdown'

import XmitterUi from "../packages"
import router from "./router"
import store from "./store"


Vue.use(XmitterUi)
Vue.use(elementui)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
